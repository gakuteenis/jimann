if(('localStorage' in window) && (window.localStorage !== null)) {
    // ローカルストレージが使える
    var contributions = document.getElementById('content');
    localStorage.setItem('contribution',contributions);
    console.log(contributions);
    var hoge ;
} else {
    // 使えない。。。
    alert('No');
}
