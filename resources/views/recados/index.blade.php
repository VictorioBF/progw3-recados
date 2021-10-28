@extends('templates.base')
@section('title', 'Recados')
@section('h1', 'Página de Recados')

@section('content')
<div class="row">
    <div class="col">
        <p>Sejam bem-vindos à página de recados</p>

        <a class="btn btn-primary" href="{{route('recados.inserir')}}" role="button">Deixar recado</a>
    </div>
</div>

<div class="row">
    <table class="table">
        <tr>
            <th>ID</th>
            <th>Nome</th>
            <th width="50%">Comentário</th>
            <th>Gerenciar</th>
        </tr>

        @foreach($recados as $rec)
        <tr>
            <td>{{$rec->id}}</td>
            <td>
                {{$rec->nome}}
            </td>
            <td>{{$rec->comentario}}</td>
            <td>
                <a href="{{ route('recados.edit', $rec) }}" class="btn btn-primary btn-sm" role="button"><i class="bi bi-pencil-square"></i> Editar</a>
                @if (session('usuario'))
                  <a href="{{ route('recados.remove', $rec) }}" class="btn btn-danger btn-sm" role="button"><i class="bi bi-trash"></i> Apagar</a>
                @endif
            </td>
        </tr>
        @endforeach
    </table>
</div>
@endsection