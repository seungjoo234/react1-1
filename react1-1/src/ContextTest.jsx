const ThemeContext = React.createContext('light')

function App() {
    return (
        <ThemeContext.Provider value="dark">
            <ToolBar />
        </ThemeContext.Provider>
    )
}

function ToolBar(props) {
    return (
        <div>
            <ThemeButton theme={props.theme}/>
        </div>
    )
}

function ThemeButton(props) {
    return (
        <ThemeContext.Consumer>
            {value => <Button theme={value} />}
        </ThemeContext.Consumer>
    )
}