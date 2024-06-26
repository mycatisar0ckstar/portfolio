$(function(){
    $('.minye').fullpage({
        navigation: true,
        // navigation: 페이지 옆에 점생기게 하는거
        navigationPosition: 'right',
        navigationTooltips: ['홈', 'ABOUT', 'WORK1', 'WORK2',],
        // anchors:['page1','page2','page3','page4']

        responsiveWidth: 1000,

    })

//about에서 칸 눌러 이동하기

    $('.tab ul li').click(function(){
        $('.tab ul li').removeClass('on')
        $(this).addClass('on')

        $('.menu').hide()
        let idx = $(this).index()

        $('.menu').eq(idx).show()
    })

    $('.tab ul li').eq(0).trigger('click')


    //다음버튼, 이전버튼으로 앨범 돌아가게,
    //제목바뀌게 바 채워지게 만들기
    var cIndex = 0;
    let img = $('.playimg img');
    let playbar = 0;
    const maxPlaybar = 100;
    
    function show(index) {
        img.hide().removeClass('on');
        img.eq(index).show().addClass('on');
    }
    
    $('.fa-forward').click(function() {
        console.log(cIndex);
        if (cIndex < img.length - 1) {
            cIndex = (cIndex + 1) % img.length;
            show(cIndex);
        }
        if (playbar < maxPlaybar) {
            playbar += 25;
        }
        if (playbar > maxPlaybar) {
            playbar = maxPlaybar;
        }
    
        $('.bar span').animate({
            width: playbar + '%'
        });
    
        let on = $('.name div.on');
        if (on.next().length) {
            on.removeClass('on').next().addClass('on');
        }
    });
    
    $('.fa-backward').click(function() {
        console.log(cIndex);
        if (cIndex > 0) {
            cIndex = (cIndex - 1 + img.length) % img.length;
            show(cIndex);
        }
        if (playbar > 0) {
            playbar -= 25;
        }
        if (playbar < 0) {
            playbar = 0;
        }
    
        $('.bar span').animate({
            width: playbar + '%'
        });
    
        let on = $('.name div.on');
        if (on.prev().length) {
            on.removeClass('on').prev().addClass('on');
        }
    });
    
    show(cIndex);


    //핸드폰에서 폴더 눌러 영상 열고 닫기
    $('.phone .mid .list div').click(function(){
        $('.phone .mid .list div').removeClass('on')
        $(this).addClass('on')

        $('.accodi > *').hide()
        let idx = $(this).index()

        $('.accodi > *').eq(idx).show()
    })

    $('.phone .mid .list .moving').eq(0).trigger('click')



    //재생 버튼을 누르면
    //영상 팝업이 뜨게
    let popup = $('.playlist .popup .vid1');

    $('.playlist .plright .icon .fa-play').click(function(){
        if (cIndex === 0) {
            popup.first().addClass('on');
        }else if(cIndex === 1){
            popup.first().removeClass('on');
            $('.playlist .popup .vid1:nth-child(2)').addClass('on');
        }else if(cIndex === 2){
            $('.playlist .popup .vid1:nth-child(2)').removeClass('on');
            $('.playlist .popup .vid1:nth-child(3)').addClass('on');
        }else if(cIndex === 3){
            $('.playlist .popup .vid1:nth-child(3)').removeClass('on');
            $('.playlist .popup .vid1:nth-child(4)').addClass('on');
        }else if(cIndex === 4){
            $('.playlist .popup .vid1:nth-child(4)').removeClass('on');
            $('.playlist .popup .vid1:nth-child(5)').addClass('on');
        }
    })

    $('.playlist .popup .discription .fa-solid').click(function(){
        $('.playlist .popup .vid1').removeClass('on')
    })


    //씨인덱스를 사용해서 이프문으로 씨인덱스가 0일때 1번 인덱스
    //영상팝업은 한 디아이브이로 다섯개 예쁘게 묶어놓기
    

    //1번 썸네일일때 재생버튼을 누르면
    //1번 영상이 뜨고

    //2번 썸네일일때 재생버튼을 누르면
    //2번 영상이 뜨고

    //3번 썸네일일때 재생버튼을 누르면
    //3번 영상이 뜨고

    //4번 썸네일일때 재생버튼을 누르면
    //4번 영상이 뜨고

    //5번 썸네일일때 재생버튼을 누르면
    //5번 영상이 뜨고




})


// const items = document.querySelector('.playlist .plright .icon .fa-play')
// const close = document.querySelector('.popup .discription .fa-solid')
// const popup = document.querySelector('. playlist .popup')

// items.foreach((el)=>{
//     el.addEventListener('click', (e)=>{
//         popup.classList.add('on')
//         popup.querySelector('.playlist .popup figure video').play()
//     })
// })