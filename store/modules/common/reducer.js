import { handleActions } from 'redux-actions'
import actions from './action'
const {displaySetDialog,
    setGithubInfo}=actions
export const namespace = 'common'

export const defaultState = {
    dialog: {
        key: 0,
        displayed: false,
    },
    // github个人信息
    githubInfo: {},
}

export const commonReducer = handleActions(
    {
        [displaySetDialog]: (state, action) => {
            const { dialog, displayed = true } = action.payload || {}
            const { key } = state.dialog
            dialog.key = key + 1
            return { ...state, dialog: { ...dialog, displayed } }
        },

        [setGithubInfo]: (state, action) => {
            const { githubData } = action.payload
            return { ...state, githubData }
        }
    },
    defaultState
)