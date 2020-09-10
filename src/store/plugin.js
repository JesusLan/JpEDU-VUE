import { setHttpToken } from '../utils/http'

const subscribe = (store) => {
    store.subscribe((mutation, state) => {
        switch (mutation.type) {
            case 'SET_TOKEN':
                setHttpToken(state.auth.token.access_token)
        }
    })
}

export default (store) => {
    subscribe(store)
};