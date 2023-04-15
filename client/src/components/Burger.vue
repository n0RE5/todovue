<template>
    <div class="burger">
        <div class="burger_w">
            <div @click="openModal" class="burger_btn">
                <span :class="!$store.state.modal.burgerActive ? `burger_arrow` : `burger_arrow active`"></span>
            </div>
            <div :class="!$store.state.modal.burgerActive ? `burger_content` : `burger_content content_active`">
                <div class="burger_content_w">
                    <div class="burger_email">{{ $store.state.auth.user.email }}</div>
                    <div class="burger_links">
                        <a @click="logout" class="logout">Logout</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        openModal() {
            this.$store.commit('switchBurgerState')
        },
        logout() {
            this.$store.dispatch('logout')
            this.$router.push('/')
        }
    }
}
</script>

<style scoped lang="scss">
@import '../styles/variables.scss';
.burger {
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    height: 30px;
}
.burger_w {
    display: flex;
    justify-content: center;
}

.burger_btn {
    z-index: 6;
    transition: all .2s ease-in;
    display: flex;
    justify-content: center;
    width: 80px;
    height: 30px;
    border-bottom-right-radius: 12px;
    border-bottom-left-radius: 12px;
    background-color: black;
    &:hover {
        cursor: pointer;
        background-color: rgb(62, 62, 62);
    }
}

.burger_arrow {
    display: flex;
    margin-top: 12px;
    &::before {
        transition: all .25s ease-in-out;
        margin-right: -3px;
        display: flex;
        content: "";
        width: 25px;
        height: 5px;
        transform: rotateZ(30deg);
        background-color: white;
    }
    &::after {
        transition: all .25s ease-in-out;
        margin-left: -3px;
        display: flex;
        content: "";
        width: 25px;
        height: 5px;
        transform: rotateZ(-30deg);
        background-color: white;
    }
}

.active {
    &::before {
        transform: rotateZ(-30deg);
    }
    &::after {
        transform: rotateZ(30deg);
    }
}

.burger_content {
    position: absolute;
    z-index: 3;
    width: 100vw;
    height: 100vh;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: white;
    display: none;
    transform: translateY(-100vh);
}

.burger_content_w {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 80px;
    width: 100%;
}

.burger_email {
    color: $dark;
    font-weight: 700;
    font-size: 1.8rem;
}
.burger_links {
    margin-top: 24px;
    width: 100%;
    display: flex;
}

.logout {
    color: $dark;
    font-size: 1.8rem;
    width: 100%;
    flex: 1;
    text-align: center;
    padding: 15px;
    background-color: whitesmoke;
    &:hover {
        background-color: white;
        text-decoration: underline;
        cursor: pointer;
    }
}

.content_active {
    display: flex;
    transition: all .15s ease-in;
    transform: translateY(0);
}

@media (min-width: $small) and (max-width: $large-s) {
    .burger {
        display: block;
    }
}

</style>