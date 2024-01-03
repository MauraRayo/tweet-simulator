<template>
    <div class="tweet-form container" :class="{ open: showForm }">
        <form>
            <input class="form-control" type="text" placeholder="Tu nombre">
            <textarea class="form-control"  rows="3" placeholder="Escribe tu tweet"></textarea>
            <button type="button" class="btn btn-primary">Enviar Tweet</button>
        </form>
    </div>
</template>

<script>
    export default {
        props: {
            showForm: Boolean,
        }
        
    }
</script>

<style lang="scss" scoped>
.tweet-form{
    margin-top: 20px;
    height:0;
    overflow:  hidden;

    &.open{
        height: auto;
    }

    form{
        margin-bottom: 50px;
    }
    input {
        margin-bottom: 10px;

    }
    button {
        width: 100%;
        margin-top: 10px ;
    }
}
</style>