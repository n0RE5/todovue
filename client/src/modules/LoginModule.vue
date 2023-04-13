<template>
    <div class="auth">
        <div class="auth_w">
            <div v-if="login" class="auth_title">Login</div>
            <div v-else class="auth_title">Register</div>
            <div class="auth_box">
                <div class="auth_label">Email</div>
                <input class="auth_input" :value="email" placeholder="example@mail.com" @input="email = $event.target.value" type="text">
            </div>
            <div class="auth_box">
                <div class="auth_label">Password</div>
                <input class="auth_input" :value="password" @input="password = $event.target.value" type="password">
            </div>
            <button v-if="login" @click="auth" class="auth_btn">Login</button>
            <button v-else @click="auth" class="auth_btn">Register</button>
            <div class="switch" v-if="login">Have an account? <button @click="login = !login">Login</button></div>
            <div class="switch" v-else>No account? <button @click="login = !login">Register</button></div>
        </div>
    </div>
</template>

<script>
import { login, registration } from '@/http/userAPI'
export default {
    data() {
        return {
            email: '',
            password: '',
            login: false,
        }
    },
    methods: {
        async auth() {
            try {
                let response;
                this.$store.commit('fetchUser')
                if (this.login) {
                    response = await login(this.email, this.password)
                } else {
                    response = await registration(this.email, this.password)
                }
                this.$store.commit('fetchUserSuccess', response)
                this.$router.push('/todo')
            } catch (error) {
                this.$store.commit('fetchUserError')
                console.log(error);
            }
        }
    },
    mounted() {
        this.$store.state.auth.isAuth && this.$router.push('/todo')
    }
}
</script>

<style lang="scss" scoped>
@import '../styles/variables.scss';

.auth {
    color: $dark;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.auth_w {
    display: flex;
    flex-direction: column;
    justify-content: start;
    padding: 20px 15px;
    border: $border;
    border-radius: 12px;
    width: 100%;
    max-width: 500px;
}

.auth_title {
    font-weight: 700;
    text-align: center;
    font-size: 1.8rem;
}

.auth_box {
    margin-top: 12px;
    width: 100%;
}

.auth_label {
    font-size: 1.2rem;
}

.auth_input {
    border: $border;
    margin-top: 4px;
    width: 100%;
    border-radius: 12px;
    padding: 12px 8px;
}

.auth_btn {
    background-color: transparent;
    color: $dark;
    margin: 24px 0;
    border: $border;
    font-weight: 400;
    font-size: 1.2rem;
    border-radius: 12px;
    padding: 15px 30px;
    align-self: center;
    &:hover {
        cursor: pointer;
        background-color: whitesmoke;
    }
}

.switch {
    text-align: center;
    font-size: 1.4rem;
    button {
        font-size: 1.4rem;
        color: rgb(56, 115, 243);
        appearance: none;
        border: none;
        background-color: transparent;
        &:hover {
            text-decoration: underline;
            color: aqua;
            cursor: pointer;
        }
    }
}
</style>