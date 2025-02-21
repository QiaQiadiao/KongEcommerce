import { defineStore } from "pinia";
import { ref } from 'vue';
import { loginAPI } from '../apis/user';
import { useCartStone } from "./cartStore";
export const useUserStore = defineStore('user', () => {
    const cartStore = useCartStone()
    const userInfo = ref({})
    const getUserInfo = async ({ account, password }) => {
        const res = await loginAPI({ account, password })
        userInfo.value = res.result
    }
    const clearUserInfo = () => {
        userInfo.value = {}
        cartStore.clearCart()
    }
    return {
        userInfo,
        getUserInfo,
        clearUserInfo
    }
}, { persist: true, })