// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const { query } = req.body
  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJSUzI1NiIsImprdSI6Imh0dHBzOi8vYXBpLWNlLmtyb2dlci5jb20vdjEvLndlbGwta25vd24vandrcy5qc29uIiwia2lkIjoidnl6bG52Y3dSUUZyRzZkWDBzU1pEQT09IiwidHlwIjoiSldUIn0.eyJhdWQiOiJvcGVuZ2FlYS0xYTMzMjU5YjMyZWY3NDkyNTE5ZjA3MTFhOGQxOTk5YzMzMTA3MDMwMjYzNTQ2Nzg2NDQiLCJleHAiOjE2NzU1OTQwMzAsImlhdCI6MTY3NTU5MjIyNSwiaXNzIjoiYXBpLWNlLmtyb2dlci5jb20iLCJzdWIiOiI1YzNhNWM5OC00Y2MxLTUzZTMtODVlMi0wYjhmNmRlZTE4ZDciLCJzY29wZSI6InByb2R1Y3QuY29tcGFjdCIsImF1dGhBdCI6MTY3NTU5MjIzMDk0OTI1NjAwNiwiYXpwIjoib3BlbmdhZWEtMWEzMzI1OWIzMmVmNzQ5MjUxOWYwNzExYThkMTk5OWMzMzEwNzAzMDI2MzU0Njc4NjQ0In0.TwRjeRAvcgUlpfZZv8lT5ZAl-86hYGhdTb2s7lv7EAzA2eNYvSKHDoDTpfUmi63ssSgMCVq73ZztTIj3VUaG1zp6JVnTqB2jedu5Gsuk465Bx1PrCGxvtoi9i9dD6yncvbZUoqEk4Pzjig1X3Kt1pIs54NsGLsCzQYSAKvjMX3u1LVpfAaOx-YeTVMuTtRYnKzLGNqCgTRwZUXPv7sev3d2Rgovaxd4HmLu__b_FFLsiRZNUWE9KvPEDPip8w6m3LgzaqA6f5-OsC8R7yi-Ru_ypzv6TR6hjofY0UzueXf_BU7SlpuHm9j0sLQzvjq7fXs0v_cplAXIOR8OcHYWgbw'
    },
    redirect: 'follow'
  }
  // fetch(
  //   `https://api-ce.kroger.com/v1/products?filter.term=${query}`,
  //   requestOptions
  // )
  //   .then(response => response.text())
  //   .then(result => console.log(result))
  //   .catch(error => console.log('error', error))

  res.status(200).json({ message: query })
}
