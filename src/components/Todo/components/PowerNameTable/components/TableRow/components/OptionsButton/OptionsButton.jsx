import './OptionsButton.css'

export const OptionsButton = ({setShownContent}) => {
    return <div onClick={() => setShownContent('more')} className="optionsButton"></div>
}