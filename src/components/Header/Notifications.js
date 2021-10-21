import notification from '../../assets/notification.png'
import styled from 'styled-components'

const HeaderNotification = styled.span`
display: flex;
align-items: center;
justify-content: flex-start;
flex: 1;
line-height: 100%;
background-color: white;
position: relative;
`
const HeaderNotificationimg = styled.img`
height: 20px;
`
const HeaderNotificationNumber = styled.span`
position: absolute;
display: flex;
align-items: center;
justify-content: center;
font-size: 7px;
top: -1em;
left: -1em;
background-color: #178c9a;
color: white;
width: 8px;
height: 8px;
border-radius: 50%;
`

function Notifications() {
    return (
        <HeaderNotification >
            <HeaderNotificationimg src={notification} alt="Icone de notifications" />
            <HeaderNotificationNumber > </HeaderNotificationNumber>        
        </HeaderNotification>
    ) 
}

export default Notifications