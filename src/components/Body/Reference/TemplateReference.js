import styled from 'styled-components';

function TemplateReference() {

const DivAddPage = styled.div`
display: flex;
height: 100%;
width: 100%;
justify-content:center;
align-items:center; 
padding: 20px;
`
const DivTitle= styled.div`
display: flex;
width: 30%;
align-items:center;
font-size:32px;
`
const DivPhoto = styled.div`
display: flex;
width: 70%;
align-items:center;
justify-content:center;
`
const DivText = styled.div`
display: flex;
width: 70%;
align-items:center;
`

    return (
        <DivAddPage>
            <DivTitle>
            Wikit a mené un projet de chatbot avec la Région Pays de Loire. Le chatbot a pour objectif de répondre aux questions fonctionnelles des utilisateurs du e-pass Jeune proposé par la région Pays de la Loire.
            </DivTitle>
            <DivPhoto>
    Caca
            </DivPhoto>
            <DivText>
            Le chatbot gère ainsi de multiples problématiques/démarches que des jeunes de la région Pays de Loire et/ou les partenaires du dispositif peuvent rencontrer. Il propose ainsi des réponses sous format d’arbres conversationnels avec des images, vidéos, documents et des scénarios de sortie comme la création d’un ticket d’assistance sur ZenDesk en cas de réponse non trouvée par le chatbot.
            </DivText>
        </DivAddPage>
    )
}

export default TemplateReference