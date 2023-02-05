export default function handler(req, res) {
  var myHeaders = new Headers()
  myHeaders.append(
    'Authorization',
    'Basic b3BlbmdhZWEtMWEzMzI1OWIzMmVmNzQ5MjUxOWYwNzExYThkMTk5OWMzMzEwNzAzMDI2MzU0Njc4NjQ0OlRHNVVEZ3dQTlNxTDRKTWxhaTZaSGNoTHZwRkxoSmFzVk5PZlV6amM='
  )
  myHeaders.append('Content-Type', 'application/x-www-form-urlencoded')
  myHeaders.append(
    'Cookie',
    '_abck=BDF24F73599F0A265C5FDDE2949C5C5C~-1~YAAQnD83F41zk8eFAQAADSnnIAm+x8JUXshffhewuZiSK7O7V/STvpgYzE8dmvdXEt78i3Uwiswe+1f9NE0XiA0rn/1VrbeEC+eETGRnyjHzBtQQGTZKAMeg02zyUcKwryjH0RfIW60daNa3GWdId6vDPp3BKmHwt3IeeSxP8NOhIPQuB7YaaN+MD/My8Epx13Gr+QE/ps1dDACw0Yq57kpKSR28pmMacv67YdrLQ4D40YX4j7uDfBYZEjKB5FA+dgZt0lF/LuU8q0onJW1aLUo3HG6SfcOT60+vEuQncxpwuWM4L+l0esvZTrm9NTpY/jXtUMKdiSVNSiL7ytQag7gzhpOC+wqggcQ+mVm4Qb0d9DRgrCYWSlz2ohA=~-1~-1~1675573817; bm_sz=F872DD55296B389B2BEA27EAA706A2A9~YAAQnD83F45zk8eFAQAADSnnIBITsdtzw1GsFrl+xB7bCllm96MUlj0JksWRyU/lxxNR3aXMJVzie0QmYoDd7kyETttmgIqQorI4X6aBTYVbcaQtFTkWD/ygIZsb2msH+7oIPx1MTuMYLCivRJzqsj3z5w+PT8W7cm8zHVMZ/UmYTCreUw/oBxnDqeUe4g4HQpne0zGGt4sH9xwKrxk6xf3yJnZHwSWCdhcKcotRcZ806GhzrxNFEWviPWqyN2lbBlCg/k7nXLtuM8VjLftFA+ddYcM8w1nZb9gZZoZzQVyWYyi+ZHnrH0kbPM+MsNkLOoGoIVkME6q80lSYcwfHs+7z1A/nflKA+TizyIZC1yn/8iPXPDV9NcLeI8bvM+neVW0ZYQ==~3422263~4343364'
  )

  const urlencoded = new URLSearchParams()
  urlencoded.append('grant_type', 'client_credentials')
  urlencoded.append('scope', 'product.compact')

  const requestOptions = {
    method: 'POST',
    headers: {
      Authorization:
        'Basic b3BlbmdhZWEtMWEzMzI1OWIzMmVmNzQ5MjUxOWYwNzExYThkMTk5OWMzMzEwNzAzMDI2MzU0Njc4NjQ0OlRHNVVEZ3dQTlNxTDRKTWxhaTZaSGNoTHZwRkxoSmFzVk5PZlV6amM=',
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: urlencoded,
    redirect: 'follow'
  }

  fetch('https://api-ce.kroger.com/v1/connect/oauth2/token', requestOptions)
    .then(response => response.json())
    .then(result =>
      res.status(200).json({ access_token: result['access_token'] })
    )
    .catch(error => console.log('error', error))
}
