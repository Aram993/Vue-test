<template>
    <div>
        {{$i18('app.title')}}
        <button @click="changeLanguage('ru')">RU</button>
        <button @click="changeLanguage('en')">EN</button>
        <button>{{ $i18('app.btn') }}</button>

        <hr>
        <h1>Language  is {{ $getLang() }}</h1>
    </div>
</template>
<script>
export default {
    methods: {
        handleClick() {
            this.$alert(1);
        },
        changeLanguage(lang) {
            this.$changeLanguage(lang);
            this.$forceUpdate();
        }
    }
}
</script>
