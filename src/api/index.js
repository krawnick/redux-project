export const client = async (url, { body, ...customConfig }) => {
  const headers = {
    'Content-Type': 'application/json',
  }
  const config = {
    method: body ? 'POST' : 'GET',
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig.headers,
    },
  }

  if (body) {
    config.body = JSON.stringify(body)
  }

  try {
    const response = await fetch(url, config)

    if (!response.ok) throw new Error('failed to fetch')

    const data = await response.json()
    return data
  } catch (error) {
    return Promise.reject(error.message)
  }
}

client.get = function (url, customConfig = {}) {
  return client(url, customConfig)
}
client.post = function (url, body, customConfig = {}) {
  return client(url, { ...customConfig }, body)
}
client.delete = function (url, customConfig = {}) {
  return client(url, { ...customConfig, method: 'DELETE' })
}
client.patch = function (url, body, customConfig = {}) {
  return client(url, { ...customConfig, body, method: 'PATCH' })
}
