import React from 'react'
import { Button } from '@progress/kendo-react-buttons'
import kendoka from './kendoka.svg'
import './App.css'
// Kendo
import { Dialog, DialogActionsBar } from '@progress/kendo-react-dialogs'

function App() {
  const handleClick = React.useCallback(() => {
    window.open('https://www.telerik.com/kendo-react-ui/components/', '_blank')
  }, [])

  const [visible, setVisible] = React.useState<boolean>(false)
  const toggleDialog = () => {
    setVisible(!visible)
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={kendoka} className='App-logo' alt='kendoka' />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Button themeColor={'primary'} size={'large'} onClick={handleClick}>
          Learn KendoReact
        </Button>
        <h1>KendoReact Dialog</h1>
        <button
          className='k-button k-button-md k-rounded-md k-button-solid k-button-solid-base'
          onClick={toggleDialog}
        >
          Open Dialog
        </button>
        {visible && (
          <Dialog title={'Please confirm'} onClose={toggleDialog}>
            <p style={{ margin: '25px', textAlign: 'center' }}>
              Are you sure you want to continue?
            </p>
            <DialogActionsBar>
              <button
                className='k-button k-button-md k-rounded-md k-button-solid k-button-solid-base'
                onClick={toggleDialog}
              >
                No
              </button>
              <button
                className='k-button k-button-md k-rounded-md k-button-solid k-button-solid-base'
                onClick={toggleDialog}
              >
                Yes
              </button>
            </DialogActionsBar>
          </Dialog>
        )}
      </header>
    </div>
  )
}

export default App
