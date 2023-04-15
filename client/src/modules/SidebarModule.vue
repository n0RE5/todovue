<template>
    <div class="sidebar">
        <div class="sidebar_content">
            <div class="sidebar_top">
                <div class="sidebar_top_username">
                    <span>
                        <img src="../assets/user.png"/>
                    </span>
                    {{ $store.state.auth.user.email }}
                </div>
                <div>
                    <div 
                        @click="dropdownVisible = !dropdownVisible"
                        class="sidebar_top_settings"
                    />
                    <Dropdown
                        @click="visible=false"
                        v-model:visible="dropdownVisible" 
                    >
                        <a @click="signOut">Logout</a>
                    </Dropdown>
                </div>
            </div>
            <hr class="hr" />
            <div class="sidebar_stats">
                <div class="sidebar_stats__title">Your Todos</div>
                <div class="sidebar_stats__value">{{ $store.state.todo.todos.length }}</div>
                <div class="sidebar_stats__per">TODO/month</div>
            </div>
        </div>
    </div>
</template>

<script>
import Dropdown from '@/components/UI/Dropdown.vue';
export default {
    components: {
        Dropdown
    },
    data() {
        return {
            dropdownVisible: false
        }
    },
    methods: {
        signOut() {
            this.$store.dispatch('logout')
            this.$router.push('/')
        }
    }
}
</script>

<style scoped lang="scss">
@import '../styles/variables.scss';
.sidebar {
    height: calc(100vh - 100px);
    padding: 0 60px;
    width: 600px;
    border-left: 2px solid #d6d8e7;
}

.hr {
    margin: 25px 0;
    border-top: $border;
}

.sidebar_stats {
    display: flex;
    flex-direction: column;
    text-align: center;
    &__title {
        font-size: 20px;
        color: $dark;
        font-weight: 500;
    }
    &__value {
        margin: 8px 0;
        font-size: 48px;
        font-weight: 700;
        color: $dark;
    }
    &__per {
        color: rgb(38, 38, 38);
        font-size: 18px;
    }
}

.sidebar_top {
    width: 100%;
    display: flex;
    margin-bottom: 100px;
    justify-content: space-between;
    align-items: center;
}

.sidebar_top_username {
    display: flex;
    align-items: center;
    color: $dark;
    font-size: 22px;
    span {
        border-radius: 50%;
        overflow: hidden;
        display: flex;
        content: "";
        width: 65px;
        height: 65px;
        margin-right: 15px;
    }
}

.sidebar_top_settings {
    transition: all .4s ease-in-out;
    border-radius: 8px;
    &::before {
        display: flex;
        content: "";
        width: 45px;
        height: 45px;
        background: url('../assets/settings.png') no-repeat center;
        background-size: contain;
    }
    &:hover {
        cursor: pointer;
        background-color: black;
        &::before {
            filter: invert(100%);
        }
    }
}

.burger {
    display: none;
}

@media (min-width: $small) and (max-width: $small-s) {
    .sidebar {
        padding: 12px;
        width: 32px;
        display: none;
    }
    .sidebar_content {
        display: none;
    }
    .burger {
        display: flex;
    }
}

@media (min-width: $medium) and (max-width: $medium-s) {
    .sidebar {
        display: none;
    }
}

@media (min-width: $large) and (max-width: $large-s) {
    .sidebar {
        display: none;
    }
}

@media (min-width: $big) and (max-width: $big-s) {
    .sidebar {
        padding: 24px;
        width: 100%;
        max-width: 400px;
    }
}

</style>