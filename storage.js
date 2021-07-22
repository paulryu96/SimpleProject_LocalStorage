const username = document.querySelector('#userName')
const age = document.querySelector('#userAge')
const showContent = document.querySelector('#showData')
const showUserData = document.querySelector('#showUserName')

function saveUserName(text){
    const UserName = localStorage.setItem(username.value, age.value)
}

showContent.addEventListener("click", function(e){
    let arr = []

    for( let i = 0; i < localStorage.length; i++ ){
        let obj = {
            이름 : localStorage.key(i),
            나이 : localStorage.getItem(localStorage.key(i))
        }
        arr[i] = obj
    }
    showUserData.innerHTML = JSON.stringify(arr)

})


function delUserData(){
    localStorage.clear()
    document.getElementById('showUserName').innerText = '데이터 삭제가 완료되었습니다.'
}