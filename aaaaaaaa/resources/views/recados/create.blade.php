@extends('templates.base')
@section('title', 'Deixar Recado')
@section('h1', 'Deixar Recado')

@section('content')
<div class="row">
    <div class="col-4">

        <form method="post" action="{{ route('recados.gravar') }}">
            @csrf
            <!--campos-->
            <div class="mb-3">
                <label for="nome" class="form-label">Nome</label>
                <input type="text" class="form-control" id="nome" name="nome">
            </div>

            <div class="mb-3">
                <label for="preco" class="form-label">Comentário</label>
                <textarea class="form-control" id="comentario" name="comentario" rows="3"></textarea>
            </div>
            <div class="mb-3">
                <button type="submit" class="btn btn-primary">Deixar Recado</button>
            </div>
        </form>

    </div>
</div>
@endsection