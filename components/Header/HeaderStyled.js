import styled from "styled-components";


export const HeaderStyled = styled.div`
    padding: 0px 30px;
    width: 100%;
    
    
   
    
    
 

    background: url("/images/header_background.jpg");
    background-repeat: no-repeat;
    background-size: 100% 100%;

    min-height: 350px;
  
    

    .header-content{
        display: flex;
        flex-direction: column;
        min-height: 350px;
        .top-header{
            display: flex;
            justify-content: space-between;
            column-gap: 10px;
            align-items: center;
            margin-top: 10px;
            .logo{
                img{
                    width: 100%;
                }
            }
            .label{
                font-weight: bold;
                color: #FFFFFF;
            }
    
    }
    }
    .header-content.fixed-header{
        padding: 0px 30px;
        position: fixed;
        z-index: 9999999;
        width: 100%;
        top:0;
        left: 0;
        background-color: #FFFFFF;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
        min-height: auto;
        height: auto;
        
        .logo{
            width: 100px;
        }
        .nav-bar{
            margin-left: auto;
        }
       
        flex-direction: row;
        .label{
             display: none;
        }
    }

  
    
    
    @media screen and (max-width:768px){
        min-height: 130px;
        .header-content{
            min-height: 130px;
            .label{
                font-size: 14px;
            }
        }
    }

    
`
