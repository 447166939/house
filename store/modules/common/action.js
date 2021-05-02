import { createActions } from 'redux-actions'
const actions= createActions(
    {
        DISPLAY_SET_DIALOG: (dialog, displayed) => ({
            dialog,
            displayed,
        }),
        // 获取github个人信息
        FETCH_GIT_INFO: (username) => ({ username }),
        SET_GITHUB_INFO: (githubData) => ({ githubData }),
        TEMP_SET_INFO:(result)=>({result}),
    },
    'TEMP_GET_INFO',
)

export default actions