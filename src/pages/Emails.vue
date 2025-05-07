<template>
    <div>
        Emails
        <div class="wrapper">
            <div class="cards">
               <router-link  class="card" v-for="item in emails" :to="`/emails/${item.id}`">
                {{ item.title }}
               </router-link>
            </div>
            <div class="email">
                {{ !mail ? 'Choose email' : mail }}
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            emails: [
                {id: 1, title: 'First email', body: 'Lorem asd asd asd asd asd as das d 1'},
                {id: 2, title: 'Second email', body: 'Lorem asd asd asd asd asd as das d 2'},
                {id: 3, title: 'Third email', body: 'Lorem asd asd asd asd asd as das d 3'},
                {id: 4, title: 'Fourth email', body: 'Lorem asd asd asd asd asd as das d 4'},
            ]
        }
    },
    computed: {
        mail() {
            const mailId = this.$route.params.mailId;
            if(!mailId) {
                return '';
            }

            return this.emails.filter(item => item.id === +mailId)[0]?.body
        }
    }
}
</script>
<style lang="scss">
    .wrapper {
        display: flex;
        gap: 30px;

        & > .cards {
            width: 30%;
        }

        & > .email {
            width: 70%;
            border-left: 1px solid black;
            padding-left: 10px;
        }
    }

    .card {
        padding: 10px;
        border: 1px solid black;
        margin-bottom: 10px;
        cursor: pointer;
    }

    .cards {
        display: flex;
        flex-direction: column;
    }
</style>