import styled from 'styled-components'

const Wrapper = styled.div`padding: 1em; background: gray;`

const Title = styled.div`font-size: 1.5em; color: white; text-align: center;`

const Button = styled.button`color: ${props => props.dark ? 'white' : 'dark'};
                             background: ${props => props.dark ? 'black' : 'white'};
                             border: 1px solid black`

const RoundButton = styled(Button)``

const blockItem = [
    {
        label: '1',
        padding: '1rem',
        backgroundColor: 'red'
    },
    {
        label: '2',
        padding: '2rem',
        backgroundColor: 'blue'
    },
    {
        label: '3',
        padding: '4rem',
        backgroundColor: 'green'
    },
];

export default function MainPage2() {
    return (
        <Wrapper>
            <Title>
                안녕 리액트!
            </Title>
            <Button>Normal</Button>
            <Button dark>Dark</Button>
            <br/><br/>
            {blockItem.map((blockItem) => {
                <block padding={blockItem.padding} backgroundColor={blockItem.background}>
                    {blockItem.label}
                </block>
            })}
        </Wrapper>
    )
}