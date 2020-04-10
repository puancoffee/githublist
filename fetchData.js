// const URL =
// 'http://35.240.201.155:3000/api/v1/wanderlink/show/idn/destination'
const githubURI = 'https://api.github.com/users/puancoffee/followers'

const addData = (data) => {
    const showData = `
    <tr>
                <th id='dataList' scope="row" class='text-center'>${data.id}</th>
                <td class='text-center'>${data.login}</td>
                <td>
                <div class="text-center">
                <img src="${data.avatar_url}" class="rounded-circle" alt="..." width="50px">
                </div>
                </td>
                <td class='text-center'>
                <a target="_blank" href="${data.html_url}" type="button" class="btn btn-primary"><i class="fab fa-github-alt"></i> Github</a>
                </td>
            </tr>`;
    document
        .getElementById('itemList')
        .innerHTML += showData
}

fetch(githubURI).then(res => {
    return res.json()
}).then(data => {
    console.log(data);
    for (let i = 0; i >= 0; i++) {
        addData(data[i])

    }
})