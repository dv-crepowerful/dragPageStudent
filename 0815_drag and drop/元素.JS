  function dragStartHandler(event) //要針對dragStart(拖曳開始)事件撰寫處理程序，ondragStart=dragStartHandler(event)
  {
    if (event.target instanceof HTMLLIElement) //檢查產生dragStart事件的元素是否為<li>元素
    {
      
      event.dataTransfer.setData('text', event.target.dataset.value); //將拖曳資料放進dataTransfer物件，同時設定允許的動作，事件、目標、數據集、值自訂屬性data-value值
      event.dataTransfer.effectAllowed = 'move'; // 設定允許搬移
    } 
    else 
    {
      event.preventDefault(); // 如果不是，則不允許拖動選擇
    }
  }
  function dragOverHandler(event) 
  {
    event.dataTransfer.dropEffect = 'move';//抓取目標跟鼠標同步移動
    event.preventDefault();
  }
  function dropHandler(event)
  { 
    var data = event.dataTransfer.getData('text');
    var new_h1_set = document.getElementById('new_h1_set');
    var new_p_set = document.getElementById('new_p_set');
    var new_ol_set = document.getElementById('new_ol_set');
    var new_btn_set = document.getElementById('new_btn_set');
    var new_img_set = document.getElementById('new_img_set');
    var h1_edit = document.getElementById('h1_edit');
    var p_edit = document.getElementById('p_edit');
    var img_edit = document.getElementById('img_edit');
    var new_btn_edit=document.getElementById('new_btn_edit');
    var li_edit=document.getElementById('li_edit');
    var div1 = document.querySelector("#div1");
    var cre_div = document.createElement('div');
    switch(data) 
    {
        case "h1":{
        case_h1();
        cre_div_set();
        break;
         }
        case "p":{
        case_p();
        cre_div_set();
        break;
         }
        case "button":{
        case_button();
        cre_div_set();
        break;
        }
        case "ol":{
        case_ol();
        ol_sent();
        cre_div_set();
        break;
        }
        case "img":{
        case_img();
        sent_img();
        cre_div_set();
        break;
        }
    }

    
    function case_h1(){
      new_h1_set.style.display="block";
      new_p_set.style.display="none";
      new_btn_set.style.display="none";
      new_img_set.style.display="none";
      new_ol_set.style.display="none";
      h1_edit.style.display="none";
      p_edit.style.display="none";
      img_edit.style.display="none";
      new_btn_edit.style.display="none";
      li_edit.style.display="none";
    }
    function case_p(){
      new_p_set.style.display="block";
      new_h1_set.style.display="none";
      new_btn_set.style.display="none";
      new_img_set.style.display="none";
      new_ol_set.style.display="none";
      h1_edit.style.display="none";
      p_edit.style.display="none";
      img_edit.style.display="none";
      new_btn_edit.style.display="none";
      li_edit.style.display="none";
    }
    function case_button(){
      new_btn_set.style.display="block";
      new_h1_set.style.display="none";
      new_p_set.style.display="none";
      new_img_set.style.display="none";
      new_ol_set.style.display="none";
      h1_edit.style.display="none";
      p_edit.style.display="none";
      img_edit.style.display="none";
      new_btn_edit.style.display="none";
      li_edit.style.display="none";
    }
    function case_img(){
      new_img_set.style.display="block";
      new_h1_set.style.display="none";
      new_btn_set.style.display="none";
      new_p_set.style.display="none";
      new_ol_set.style.display="none";
      h1_edit.style.display="none";
      p_edit.style.display="none";
      img_edit.style.display="none";
      new_btn_edit.style.display="none";
      li_edit.style.display="none";
    }

    function case_ol(){
      new_ol_set.style.display="block";
      new_img_set.style.display="none";
      new_h1_set.style.display="none";
      new_btn_set.style.display="none";
      new_p_set.style.display="none";
      h1_edit.style.display="none";
      p_edit.style.display="none";
      img_edit.style.display="none";
      li_edit.style.display="none";
      document.querySelector("#li_type_set").style.display="block";
      document.querySelector("#li_set").style.display="none";
    }
      function cre_div_set(){
      let delete_button = document.createElement('img');
      delete_button.addEventListener("click", function(){cre_div.remove();});
      delete_button.src="https://i.imgur.com/SIdIYK8.png";
      delete_button.title="刪除";
      delete_button.style.width="25px";
      delete_button.style.height="25px";
      delete_button.style.float="right";
      cre_div.appendChild(delete_button);

      div1.appendChild(cre_div);
      cre_div.style.width="32%";
      cre_div.style.height="75px";
      cre_div.style.border="2px dashed black";
      cre_div.style.borderRadius="10px";
      cre_div.style.margin="10px 1% 10px 0px";
      cre_div.draggable="true";

      document.querySelector("#clean_all").addEventListener("click", 
      function(){
          cre_div.remove();
          document.querySelector(".clean_all_element").remove();    
      });
    }

    sent_h1.onclick=function(){
      let new_h1_set = document.querySelector("#new_h1_set")
      new_h1_set.style.display="none";
      cre_div.remove();
      h1_sent();
    }
    cancel_h1.onclick=function(){
      let new_h1_set = document.querySelector("#new_h1_set")
      new_h1_set.style.display="none";
      cre_div.remove();
    }
    function h1_sent(){
      let h_type=document.querySelector("#h_type");
      let h1 =document.createElement(h_type.value);
      let btn_edit_h1 = document.createElement('img');
      let btn_delete_h1 = document.createElement('img');
      let h1_div = document.createElement('div');
      let btn_block = document.createElement('div');

      let h1_font_family_edit=document.querySelector("#h1_font_family_edit");
      let h1_color_selector_edit=document.querySelector("#h1_color_selector_edit");
      let h1_text_align_edit=document.querySelector("#h1_text_align_edit");
      let text_in_h1edit =document.querySelector("#text_in_h1edit");
      let sent_edit_h1 = document.querySelector("#sent_edit_h1");
      let cancel_edit_h1 = document.querySelector("#cancel_edit_h1");
      let text_in_h1 =document.querySelector("#text_in_h1");
      let h1_color_selector = document.querySelector("#h1_color_selector");
      let h1_font_family = document.querySelector('#h1_font_family');
      let h1_text_align = document.querySelector('#h1_text_align');

      h1_div.appendChild(btn_block);
      btn_block.style.border="0px solid black";
      btn_block.style.height="auto";
      btn_block.style.width="auto";
      btn_block.style.display="none";
      btn_block.style.justifyContent="flex-end";
      btn_block.style.alignItems="justify-content";
      btn_block.style.flexDirection="reverse";
      
      btn_edit_h1.src="https://i.imgur.com/ohRLnWz.png";
      btn_edit_h1.title="編輯文字"; 
      btn_block.appendChild(btn_edit_h1);
      btn_edit_h1.style.float="right";
      btn_edit_h1.style.width="27px"; 
      btn_edit_h1.style.height="30px";
      btn_edit_h1.style.marginRight="1px";

      btn_edit_h1.onclick=function(){
        h1_edit.style.display="block";
        text_in_h1edit.value=h1.textContent;

        sent_edit_h1.onclick=function(){
          h1.textContent=text_in_h1edit.value;
          h1.style.fontFamily=h1_font_family_edit.value;
          h1.style.color=h1_color_selector_edit.value;
          h1.style.textAlign=h1_text_align_edit.value;
          h1_edit.style.display="none";
        }

        cancel_edit_h1.onclick=function(){
          h1_edit.style.display="none";
        }
      }
      
      btn_delete_h1.src="https://i.imgur.com/SIdIYK8.png";
      btn_delete_h1.title="刪除";
      btn_delete_h1.style.width="30px";
      btn_delete_h1.style.height="30px";
      btn_delete_h1.style.float="right";
      btn_block.appendChild(btn_delete_h1);
      btn_delete_h1.onclick=function(){
        h1_div.remove();
      };
      
      h1_div.appendChild(h1);
      h1.style.color = h1_color_selector.value;
      h1.style.fontFamily=h1_font_family.value;
      h1.style.textAlign=h1_text_align.value;
      h1.style.wordWrap="break-word";
      h1.textContent=text_in_h1.value;
      text_in_h1.value='';
      h1_font_family.value='';
      h1_text_align.value='';
      h1.draggable="true";

      div1.appendChild(h1_div);
      h1_div.style.border="none";
      h1_div.style.width="auto";
      h1_div.style.height="auto";
      h1_div.style.margin="10px 1% 10px 0px";
      h1_div.style.maxWidth="98.5%";
      h1_div.setAttribute("class","clean_all_element");
      
      h1_div.onmouseover=function(){
        h1_div.style.border="3px dashed #8c8c8c";
        h1_div.style.borderRadius="10px";
        btn_block.style.display="flex";
      }
      h1_div.onmouseout=function(){
        h1_div.style.border="none";
        btn_block.style.display="none";
      }
    }


    sent_p.onclick=function(){
      let new_p_set = document.querySelector("#new_p_set");
      new_p_set.style.display="none";
      cre_div.remove();
      p_sent();
    }
    cancel_p.onclick=function(){
      let new_p_set = document.querySelector("#new_p_set");
      new_p_set.style.display="none";
      cre_div.remove();
    }
    function p_sent(){
      let text_in_p =document.getElementById("text_in_p");
      let p =document.createElement('p');
      let p_div=document.createElement('div');
      let btn_block=document.createElement('div');
      let btn_edit_p = document.createElement('img');
      let btn_delete_p = document.createElement('img');

      let p_color_selector = document.querySelector("#p_color_selector");
      let p_font_size = document.querySelector("#p_font_size");
      let p_font_family = document.querySelector('#p_font_family');
      let p_text_align = document.querySelector('#p_text_align');
     
      let p_font_family_edit=document.querySelector("#p_font_family_edit");
      let p_font_size_edit=document.querySelector("#p_font_size_edit");
      let p_color_selector_edit=document.querySelector("#p_color_selector_edit");
      let p_text_align_edit=document.querySelector("#p_text_align_edit");
      let text_in_pedit =document.querySelector("#text_in_pedit");
      let sent_edit_p = document.querySelector("#sent_edit_p");
      let cancel_edit_p = document.querySelector("#cancel_edit_p");

      cre_div.remove();
      p_div.appendChild(btn_block);
      btn_block.style.border="0px solid black";
      btn_block.style.height="auto";
      btn_block.style.width="auto";
      btn_block.style.display="none";
      btn_block.style.justifyContent="flex-end";
      btn_block.style.alignItems="justify-content";
      btn_block.style.flexDirection="reverse";
      
      btn_edit_p.src="https://i.imgur.com/ohRLnWz.png";
      btn_edit_p.itle="編輯文字";
      btn_block.appendChild(btn_edit_p);
      btn_edit_p.style.float="right";
      btn_edit_p.style.width="27px"; 
      btn_edit_p.style.height="30px";
      btn_edit_p.style.marginRight="1px";
      btn_edit_p.onclick=function(){
        p_edit.style.display="block";
        text_in_pedit.value=p.textContent;

        sent_edit_p.onclick=function(){
          p.style.fontFamily=p_font_family_edit.value;
          p.style.fontSize=p_font_size_edit.value;
          p.style.color=p_color_selector_edit.value;
          p.style.textAlign=p_text_align_edit.value;
          p.textContent=text_in_pedit.value;
          p_edit.style.display="none";
        }

        cancel_edit_p.onclick=function(){
          p_edit.style.display="none";
        }
      }

      btn_delete_p.src="https://i.imgur.com/SIdIYK8.png";
      btn_delete_p.title="刪除";
      btn_delete_p.style.width="30px";
      btn_delete_p.style.height="30px";
      btn_delete_p.style.float="right";
      btn_block.appendChild(btn_delete_p);
      btn_delete_p.onclick=function(){
        p_div.remove();
      };
      
      p_div.appendChild(p);
      p.style.color = p_color_selector.value;
      p.style.fontSize=p_font_size.value+'px';
      p.style.fontFamily=p_font_family.value;
      p.style.textAlign=p_text_align.value;
      p.style.wordWrap="break-word";
      p.textContent=text_in_p.value;
      p.draggable="true";
      text_in_p.value='';
      // p_font_size.value='';
      // p_font_family.value='';
      // p_text_align.value='';   

      div1.appendChild(p_div);
      p_div.style.border="none";
      p_div.style.width="auto";
      p_div.style.height="auto";
      p_div.style.margin="10px 1% 10px 0px";
      p_div.style.maxWidth="98.5%";
      p_div.setAttribute("class","clean_all_element");

      p_div.onmouseover=function(){
        p_div.style.border="3px dashed #8c8c8c";
        p_div.style.borderRadius="10px";
        btn_block.style.display="flex";
      }
      p_div.onmouseout=function(){
        p_div.style.border="none";
        btn_block.style.display="none";
      }
    } 
   
    function ol_sent(){
      let sent_olli=document.querySelector("#sent_olli");
      let sent_ol=document.querySelector("#sent_ol");
      let delete_olli=document.querySelector("#delete_olli");
      let preview_ol=document.querySelector("#preview_ol");
      let ol_style=document.querySelector("#ol_style");
      let li_set=document.querySelector("#li_set");
      let li_type_btn=document.querySelector("#li_type_btn");
      let show_type=document.querySelector("#show_type");     
      
      li_type_btn.onclick=function(){
        let li_type=document.querySelector('#li_type');
        let new_ol=document.createElement(li_type.value);
        preview_ol.appendChild(new_ol);
        new_ol.style.color="white";
        new_ol.className="new_ol_class";
        li_set.style.display="block";
        ol_style.style.display="flex";
        if (li_type.value=="ol") {
          show_type.textContent="你選擇的是《ol形式》清單";
        } else if (li_type.value=="ul") {
          show_type.textContent="你選擇的是《ul形式》清單";
        } else {
          show_type.textContent="請選擇";
        }
        document.querySelector("#li_type_set").style.display="none";
        
      }

      sent_olli.onclick=function(){
        let new_li = document.createElement('li');
        let text_in_olli=document.querySelector("#text_in_olli");
        let ol_type=document.querySelector("#ol_type");
        let ol_font_family=document.querySelector("#ol_font_family");
        let ol_font_size=document.querySelector("#ol_font_size");
        let new_ol=document.querySelector(".new_ol_class")
        
        new_ol.type=ol_type.value;
        new_ol.style.fontFamily=ol_font_family.value;
        new_ol.style.fontSize=ol_font_size.value+'px';
        new_li.textContent=text_in_olli.value;
        new_li.className="new_li_class";
        new_ol.appendChild(new_li);
        ol_style.style.display="none";
        text_in_olli.value='';
      }
      delete_olli.onclick=function(){
        document.querySelector(".new_li_class").remove();
      }
      sent_ol.onclick=function(){     
        let li_div = document.createElement('div')
        let btn_edit_li=document.createElement('img');
        let btn_delete_li=document.createElement('img');
        let btn_block = document.createElement('div');  
   
        let new_ol=document.querySelector(".new_ol_class");
        let sent_edit_li=document.querySelector("#sent_edit_li");
        let cancel_edit_li=document.querySelector("#cancel_edit_li");

        let ol_font_size_edit=document.querySelector("#ol_font_size_edit");
        let ol_font_family_edit=document.querySelector("#ol_font_family_edit")
        
        cre_div.remove();
        li_div.appendChild(btn_block);
        btn_block.style.border="0px solid black";
        btn_block.style.height="auto";
        btn_block.style.width="auto";
        btn_block.style.display="none";
        btn_block.style.justifyContent="flex-end";
        btn_block.style.alignItems="justify-content";
        btn_block.style.flexDirection="reverse";

        btn_edit_li.src="https://i.imgur.com/ohRLnWz.png";
        btn_edit_li.title="編輯文字";
        btn_block.appendChild(btn_edit_li);
        btn_edit_li.style.float="right";
        btn_edit_li.style.width="27px"; 
        btn_edit_li.style.height="30px";
        btn_edit_li.style.marginRight="1px";
        btn_edit_li.onclick=function(){
          li_edit.style.display="block";
  
          sent_edit_li.onclick=function(){
            new_ol.style.fontFamily=ol_font_family_edit.value;
            new_ol.style.fontSize=ol_font_size_edit.value+'px';
            li_edit.style.display="none";
          }
  
          cancel_edit_li.onclick=function(){
            li_edit.style.display="none";
          }
        }
  
        btn_delete_li.src="https://i.imgur.com/SIdIYK8.png";
        btn_delete_li.title="刪除";
        btn_delete_li.style.width="30px";
        btn_delete_li.style.height="30px";
        btn_delete_li.style.float="right";
        btn_block.appendChild(btn_delete_li);
        btn_delete_li.onclick=function(){
          li_div.remove();
        };
        
        new_ol.style.color="black";
        li_div.appendChild(new_ol);
        new_ol_set.style.display="none";
       
        ol_type.value='';
        preview_ol.textContent='';
        show_type.textContent='';
        li_type.value='';

        div1.appendChild(li_div);
        li_div.style.border="none";
        li_div.style.width="auto";
        li_div.style.height="auto";
        li_div.style.margin="10px 1% 10px 0px";
        li_div.style.maxWidth="98.5%";
        li_div.setAttribute("class","clean_all_element");

        li_div.onmouseover=function(){
          li_div.style.border="3px dashed #8c8c8c";
          li_div.style.borderRadius="10px";
          btn_block.style.display="flex";
        }
        li_div.onmouseout=function(){
          li_div.style.border="none";
          btn_block.style.display="none";
        }
      }
      cancel_ol.onclick=function(){
        new_ol_set.style.display="none";
        preview_ol.textContent='';
        show_type.textContent='';
        cre_div.remove();
      }  

    }

    sent_btn.onclick=function(){
      let new_btn_set=document.querySelector("#new_btn_set");
      new_btn_set.style.display="none";
      // cre_div.remove();
      btn_sent();
    }
    cancel_btn.onclick=function(){
      let new_btn_set=document.querySelector("#new_btn_set");
      new_btn_set.style.display="none";
      cre_div.remove();
    }
    function btn_sent(){
      let button = document.createElement('button');
      let btn_div=document.createElement('div');
      let btn_block=document.createElement('div');
      let btn_edit_btn = document.createElement('img');
      let btn_delete_btn = document.createElement('img');

      let btn_color_selector_edit = document.querySelector('#btn_color_selector_edit');
      let btnfont_color_selector_edit = document.querySelector('#btnfont_color_selector_edit');
      let btn_size_edit = document.getElementById('btn_size_edit');
      let btn_border_radius_edit = document.getElementById('btn_border_radius_edit');
      let text_in_btn_edit = document.querySelector('#text_in_btn_edit');
      let sent_edit_btn=document.querySelector('#sent_edit_btn');
      let cancel_edit_btn=document.querySelector('#cancel_edit_btn');
      
      let btn_color_selector = document.querySelector('#btn_color_selector');
      let btnfont_color_selector = document.querySelector('#btnfont_color_selector');
      let btn_size = document.getElementById('btn_size');
      let btn_border_radius = document.getElementById('btn_border_radius');
      let text_in_btn = document.querySelector('#text_in_btn');

      cre_div.remove();
      btn_div.appendChild(btn_block);
      btn_block.style.border="0px solid black";
      btn_block.style.height="auto";
      btn_block.style.width="auto";
      btn_block.style.display="none";
      btn_block.style.justifyContent="flex-end";
      btn_block.style.alignItems="justify-content";
      btn_block.style.flexDirection="reverse";

      btn_edit_btn.src="https://i.imgur.com/ohRLnWz.png";
      btn_edit_btn.itle="編輯文字";
      btn_block.appendChild(btn_edit_btn);
      btn_edit_btn.style.float="right";
      btn_edit_btn.style.width="27px"; 
      btn_edit_btn.style.height="30px";
      btn_edit_btn.style.marginRight="1px";
      btn_edit_btn.onclick=function(){
        new_btn_edit.style.display="block";
        text_in_btn_edit.value=button.textContent;

        sent_edit_btn.onclick=function(){
          button.style.backgroundColor = btn_color_selector_edit.value;
          button.style.color = btnfont_color_selector_edit.value;
          button.style.fontSize = btn_size_edit.value+'px';
          button.style.borderRadius = btn_border_radius_edit.value;
          button.textContent=text_in_btn_edit.value;
          new_btn_edit.style.display="none";
        }

        cancel_edit_btn.onclick=function(){
          p_edit.style.display="none";
        }
      }

      btn_delete_btn.src="https://i.imgur.com/SIdIYK8.png";
      btn_delete_btn.title="刪除";
      btn_delete_btn.style.width="30px";
      btn_delete_btn.style.height="30px";
      btn_delete_btn.style.float="right";
      btn_block.appendChild(btn_delete_btn);
      btn_delete_btn.onclick=function(){
        btn_div.remove();
      };
      
      btn_div.appendChild(button);
      button.style.width = "auto";
      button.style.height ="auto";
      button.style.padding="10px 50px";
      button.style.backgroundColor = btn_color_selector.value;
      button.style.color = btnfont_color_selector.value;
      button.style.fontSize = btn_size.value+'px';
      button.style.borderRadius = btn_border_radius.value;
      button.textContent=text_in_btn.value;

      div1.appendChild(btn_div);
      btn_div.style.border="none";
      btn_div.style.width="auto";
      btn_div.style.height="auto";
      btn_div.style.margin="10px 1% 10px 0px";
      btn_div.style.maxWidth="98.5%";
      btn_div.setAttribute("class","clean_all_element");

      // btn_size.value='';
      // btn_border_radius.value='';
      // text_in_btn.value='';
      button.draggable='true';

      button.onmouseover=function(){
        button.style.backgroundColor="#ddd";
      }
      button.onmouseout=function(){
        button.style.backgroundColor=btn_color_selector.value;
      }
      button.onclick=function(){confirm('按鈕已被觸發')}

      btn_div.onmouseover=function(){
        btn_div.style.border="3px dashed #8c8c8c";
        btn_div.style.borderRadius="10px";
        btn_block.style.display="flex";
      }
      btn_div.onmouseout=function(){
        btn_div.style.border="none";
        btn_block.style.display="none";
      }

    }

    cancel_img_.onclick=function(){
      let new_img_set=document.querySelector("#new_img_set");
      new_img_set.style.display="none";
      cre_div.remove();
    }
    function sent_img(){
      var upload = document.getElementById("uploadImage");
      upload.addEventListener("change",handleFiles,false);
      function handleFiles(){
          readURL(this);
      }
      function  readURL(input){
        if(input.files && input.files[0]){
            var reader = new FileReader();
            reader.onload = function(e){
                let img_url = e.target.result;
                let sent_img_ = document.querySelector("#sent_img_");
                let preview = document.querySelector("#preview")
                preview.src =img_url;
                sent_img_.onclick=function(){
                  let new_img =document.createElement('img');
                  let img_div = document.createElement('div') 
                  let btn_edit_img=document.createElement('img');
                  let btn_delete_img=document.createElement('img');
                  let btn_block = document.createElement('div');

                  let new_img_set =document.querySelector("#new_img_set");
                  let img_width = document.querySelector("#img_width");
                  let img_height = document.querySelector("#img_height");
                  // let img_padding_top = document.querySelector("#img_padding_top");
                  // let img_padding_bottom = document.querySelector("#img_padding_bottom");
                  // let img_padding_left = document.querySelector("#img_padding_left");
                  // let img_padding_right = document.querySelector("#img_padding_right"); 
                  
                  div1.appendChild(img_div);
                  img_div.style.height="auto";
                  img_div.style.width="auto";
                  img_div.style.border="0px solid black";
                  img_div.style.margin="10px 1% 10px 0px";
                  img_div.className="clean_all_element";

                  img_div.appendChild(btn_block);
                  btn_block.style.border="0px solid black";
                  btn_block.style.height="auto";
                  btn_block.style.width="auto";
                  btn_block.style.display="none";
                  btn_block.style.justifyContent="flex-end";
                  btn_block.style.alignItems="justify-content";
                  btn_block.style.flexDirection="reverse";

                  img_div.appendChild(new_img);
                  new_img.src=img_url;
                  new_img.style.width=img_width.value+'px';
                  new_img.style.height=img_height.value+'px';
                  // new_img.style.paddingTop=img_padding_top.value+'px';
                  // new_img.style.paddingBottom=img_padding_bottom.value+'px';
                  // new_img.style.paddingLeft=img_padding_left.value+'px';
                  // new_img.style.paddingRight=img_padding_right.value+'px';

                  new_img_set.style.display="none";
                  cre_div.remove();
                  document.querySelector("#preview").src='';
                  document.querySelector('#uploadImage').value='';
                  img_url='';
                
                  btn_edit_img.src="https://i.imgur.com/ohRLnWz.png";
                  btn_edit_img.title="編輯";
                  btn_block.appendChild(btn_edit_img);
                  btn_edit_img.style.float="right";
                  btn_edit_img.style.width="27px"; 
                  btn_edit_img.style.height="30px";
                  btn_edit_img.style.marginRight="1px";
                  btn_edit_img.onclick=function(){
                    let sent_edit_img = document.querySelector("#sent_edit_img");
                    let cancel_edit_img = document.querySelector('#cancel_edit_img');
                    img_edit.style.display="block";
                    sent_edit_img.onclick=function(){
                      let img_width_edit = document.querySelector("#img_width_edit");
                      let img_height_edit=document.querySelector("#img_height_edit");
                      new_img.style.width=img_width_edit.value+'px';
                      new_img.style.height=img_height_edit.value+'px';
                      img_edit.style.display="none";
                    }
                    cancel_edit_img.onclick=function(){
                      img_edit.style.display="none";
                    }
                  }
                  btn_delete_img.src="https://i.imgur.com/SIdIYK8.png";
                  btn_delete_img.title="刪除";
                  btn_delete_img.style.width="30px";
                  btn_delete_img.style.height="30px";
                  btn_delete_img.style.float="right";
                  btn_block.appendChild(btn_delete_img);
                  btn_delete_img.onclick=function(){
                    img_div.remove();
                  };
                  
                  img_div.onmouseover=function(){
                    img_div.style.border="3px dashed #8c8c8c";
                    img_div.style.borderRadius="10px";
                    btn_block.style.display="flex";
                  }
                  img_div.onmouseout=function(){
                    img_div.style.border="none";
                    btn_block.style.display="none";
                  }
                }
            };
            reader.readAsDataURL(input.files[0]);
        }
    }
    } 
  
  }
  // div1.onmouseover=function(){
  //   div1.style.border="5px dashed #8c8c8c";
  // }
  // div1.onmouseout=function(){
  //   div1.style.border="none"
  // }

  


 



  



 