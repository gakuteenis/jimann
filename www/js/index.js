if (('localStorage' in window) && (window.localStorage !== null)) {
    // ローカルストレージが使える
    function getPosts() {
        var posts = localStorage.getItem('posts');
        posts = JSON.parse(posts);
        if (!Array.isArray(posts)) posts = [];
        return posts;
    }

    $(".submit-btn").click(() => {
        var post = {
            text: $('.contribution-text').val(),
            // userName: ユーザ名 など必要であれば保存する
        }; // 新しい投稿
        var posts = getPosts();
        posts.push(post)
        localStorage.setItem('posts', JSON.stringify(posts));
        refreshPosts()
    });

    function refreshPosts() {
        console.log('refresh')
        var posts = getPosts();
        $('.home-main').empty();
        posts.forEach(post => {
            $('.home-main').prepend(
                '<div class="timeline-box" id="timelineboxs">' +
                '<img src="./img/IMG_4657.JPG" />' +
                '<div class="timeline-content">' +
                '<div class="user-name">名前</div>' +
                '<div class="timeline-text" id="content">' + post.text + '</div>' +
                '<div class="timeline-responce">' +
                '<div class="responce-box">' +
                '<div class="empathy">共感</div>' +
                '<div id="empathies">0</div>' +
                '</div>' +
                '<div class="responce-box">' +
                '<div class="envy">うらやみ</div>' +
                '<div id="envies">0</div>' +
                '</div>' +
                '<div class="responce-box">' +
                '<div class="editing">編集</div>' +
                '<div class="delating">削除</div>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>'
            );
        });
        $('.timeline-box').show();
    }
} else {
    // 使えない。。。
    alert('No');
}
