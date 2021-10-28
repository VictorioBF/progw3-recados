<?php

namespace App\Http\Controllers;

use App\Models\Recado;
use Illuminate\Http\Request;

class RecadosController extends Controller
{
    //main
    public function index()
    {
        $recados = Recado::orderBy('id', 'asc')->get();

        return view('recados.index', ['recados' => $recados, 'pagina' => 'recados']);
    }
    //create/insert
    public function create()
    {
        //retorna a view com formulário de criar registro
        return view('recados.create', ['pagina' => 'recados']);
    }
    
    public function insert(Request $form)
    {
        //cria registro na db
        $recado = new Recado();

        $recado->nome = $form->nome;
        $recado->comentario = $form->comentario;

        $recado->save();

        return redirect()->route('recados');
    }
    //edit/update
    public function edit(Recado $rec)
    {
        //retorna a view com formulário de alterar registro
        return view('recados.edit', ['recado' => $rec, 'pagina' => 'recados']);
    }

    public function update(Request $form, Recado $rec)
    {
        //altera o registro na db
        $rec->nome = $form->nome;
        $rec->comentario = $form->comentario;

        $rec->save();

        return redirect()->route('recados');
    }
    //delete
    public function remove(Recado $rec)
    {
        //view delete
        return view('recados.remove', ['recado' => $rec, 'pagina' => 'recados']);
    }

    public function delete(Recado $rec)
    {
        //deleta o registro
        $rec->delete();

        return redirect()->route('recados');
    }
}
