if(('localStorage' in window) && (window.localStorage !== null)) {
    // ローカルストレージが使える
    var contributions = document.getElementById('timelineboxs');
    localStorage.setItem('contribution',contributions);
    console.log(contributions);
} else {
    // 使えない。。。
    alert('No');
}
