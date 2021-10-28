@extends('templates.base')
@section('title', 'Apagar Recado')
@section('h1', 'Apagar Recado')

@section('content')
<div class="row">
    <div class="col">
        <!--caso o usuário entre pela url sem estar logado-->
        @if (session('usuario'))

        <div class="alert alert-danger" role="alert">
            <i class="bi bi-exclamation-triangle-fill"></i>
            <strong>Cuidado!</strong> Você está prestes a remover o recado!
        </div>

        <p>Recado: {{$recado->nome}}</p>
        <p>Você tem certeza que deseja apagar este recado para sempre?</p>

        <form method="post" action="{{ route('recados.delete', $recado) }}">
            @csrf
            @method('delete')
            
            <input type="submit" class="btn btn-danger" value="Apagar">
            <a href="{{ route('recados') }}" class="btn btn-secondary">Não</a>
        </form>
        
        @else
        <p>Você não está logado!</p>
        <a href="{{ route('recados') }}" class="btn btn-secondary">Voltar</a>
        @endif

    </div>
</div>
@endsection