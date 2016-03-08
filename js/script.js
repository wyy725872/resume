$(document).ready(function(){
                                $.ajax({
                                  url: 'message.json',
                                  type: 'GET',
                                  dataType: 'json',
                               })
                                .done(function(returnData) {
                                  $('.section1').append('<div id="info_work" >'+returnData.work+'</div><div id="college" class="info">'+returnData.college+'</div><div id="major" class="info">'+returnData.major+'&nbsp;'+returnData.degree+'</div><div class="info" id="tel">Tel：'+returnData.phone+'</div><div class="info" id="email">Email：'+returnData.email+'</div>');
                                  //技能
                                  var arr=returnData.skill;
                                  var arrs=arr.splice(',');
                                  for(var i=0;i<arrs.length;i++){
                                    $('.skill_content ul').append('<li>'+arrs[i]+'</li>');
                                  }

                                  var project=returnData.project;
                                  var project_box=document.getElementById('project_box');
                                  for(var j=0;j<project.length;j++){
                                    $('#project_box').append('<div class="p_list"><a class="p_title"  target="_blank" href="'+project[j].link+'">'+project[j].name+'</a><div class="duty"><span class="direct">项目职责</span>'+project[j].duty+'</div><div class="p_time"><span class="direct">项目周期</span>'+project[j].date+'</div><div class="p_info"><span class="direct">项目简介</span>'+project[j].info+'</div></div>');
                                  }
                                  //荣誉
                                  $('#education-college').append(returnData.hobby);
                                  $('#education-major').append(returnData.honor_study);
                                  $('#education-degree').append(returnData.honor_contest);
                                  $('#education-lab').append(returnData.lab);
                                })
                                .fail(function() {
                                  console.log("error");
                                })
                                .always(function() {
                                  console.log("complete");
                                })
                          	$('#fullpage').fullpage({
                          		controlArrows:false,
                          		anchors:['page1','page2','page3','page4','page5'],
                          		menu:'#fullpageMenu',
                          		navigation:true,
                                      css3:true,
                                     verticalCentered: false,
                          		navigationPosition:'right',
                          		navigationTooltips:['首页','专业技能','项目经验','爱好&荣誉','联系方式'],
                          	
                          		afterLoad:function(link,index){
                          			switch(index){
                          				case 1:
                          					$('#info_photo').fadeIn(300,function(){
                                                            $('#info_name').fadeIn(300,function(){
                                                                $('#info_work').animate({width: '50%'},300,function(){
                                                                    $('#college').fadeIn(300,function(){
                                                                      $('#major').fadeIn(300,function(){
                                                                         $('#tel').fadeIn(300,function(){
                                                                            $('#email').fadeIn(300);
                                                                          });
                                                                      });
                                                                     });
                                                                   });
                                                             });
                                                           });
                          					break;
                          				case 2:
                          					$('.skill_content').animate({
                                                                 'margin-top': 0,
                                                                 'margin-left': 0,
                                                                  height: '350px',
                                                                  width: '500px'
                                                               },1000,'easeOutElastic');
                          				        break;
                          				case 3:
                                                          $('#project').animate({
                                                                     left: '150px'
                                                                 },500);
                          					break;
                          				case 4:
                                                            $('#education-college').slideDown(800,'easeOutElastic');
                                                            var set_1=setTimeout(function(){$('#education-major').slideDown(800,'easeOutElastic');},200);
                                                            var set_2=setTimeout(function(){$('#education-degree').slideDown(800,'easeOutElastic');},400);
                                                            var set_3=setTimeout(function(){$('#education-lab').slideDown(800,'easeOutElastic');},600);
                                                              $('#education-title-sty').animate({
                                                                   left: '450px'
                                                                },800,'easeInOutExpo');
                          					break;
                                            }
                                      },
                          		onLeave:function(index,nextIndex,direction){
                          			switch(index){
                          				case 1:
                          					$('#info_photo').fadeOut(10,function(){
                                                              $('#info_name').fadeOut(10,function(){
                                                                  $('#info_work').animate({width: '0'},10,function(){
                                                                       $('#college').fadeOut(10,function(){
                                                                          $('#major').fadeOut(10,function(){
                                                                              $('#tel').fadeOut(10,function(){
                                                                                 $('#email').fadeOut(10);
                  });
                });
              });
            });
          });
        }); 
                                                      break;
                          				case 2:
                          					$('.skill_content').animate({
                                                                'margin-top': '50%',
                                                               'margin-left': '50%',
                                                                 height: '0',
                                                                 width: '0'
                                                           });
                          					break;
                          				case 3:
                                                      
                                                          $('#project').animate({
                                                                left: '-180px'
                                                           },200);
                          					break;
                          				case 4:
                                                          $('.education-list-con').slideUp(300);
                                                                $('#education-title-sty').animate({
                                                                         left: '900px'
                                                             });
                          					break;

                          			}
                          		}
                          		
                          	});
                              var footerAnimate=function(){
  $('.message-callMe-click').animate({
    top: '5px'
  },500,function(){
    $('.message-callMe-click').animate({
      top: '0px'
    },500);
  });
};
setInterval(footerAnimate,1000);
 })