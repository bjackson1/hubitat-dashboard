const getAccessToken = () => {
    const searchParams = new URLSearchParams(window.location.search)
    return searchParams.get('access_token')
}

const getApiId = () => {
    const pathCheckRegex = /^\/apps\/api\/[0-9]{1,64}/
    if (!pathCheckRegex.test(window.location.pathname)) {
        throw Error('Invalid path')
    }

    const path = window.location.pathname.split('/').filter(pathElement => pathElement.length > 0)
    const apiId = path[2]

    return apiId
}

const config = {
    url: window.location.host === 'localhost:3000' ? 'http://localhost:3001/apps/api' : `${window.location.origin}/apps/api`,
    accessToken: getAccessToken(),
    apiId: getApiId(),
    webSocketUrl: window.location.host === 'localhost:3000' ? 'ws://192.168.50.11/eventsocket' : `ws://${window.location.host}/eventsocket`,
    zones: window.heatingZones,
}

export default config
