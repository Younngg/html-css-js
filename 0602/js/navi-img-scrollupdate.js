const gnb = document.querySelector('.gnb');
const gnbList = document.querySelectorAll('.gnb li');
const section = document.querySelectorAll('.section');

const updateScroll = () => {
  const nowScroll = window.scrollY;
  gnbList.forEach((li, index)=>{
    const selectedSection = section[index];
    const start = nowScroll + selectedSection.getBoundingClientRect().top;
    const end = start + selectedSection.getBoundingClientRect().height;

    if(nowScroll >= start && nowScroll < end){
      //네비 색상 업데이트
      const nowColor = window.getComputedStyle(selectedSection).backgroundColor;
      gnbList.forEach((ele)=>{
        ele.style.color='#999'
      })
      gnbList[index].style.color = nowColor;
      //해당 섹션 이미지 show
      section.forEach((ele)=>{
        ele.children[0].classList.remove('up')
      }) //한번만 나올거면 이 작업 생략
      selectedSection.children[0].classList.add('up')
    }
  })
}


window.addEventListener('scroll', updateScroll)