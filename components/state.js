import Dialog, { DialogFooter, DialogButton, DialogContent } from 'react-native-popup-dialog';




export default class App3 extends Component {
    render() {
       
       return (
<View style={styles.container}>
  <Dialog
    visible={this.state.visible}
    footer={
      <DialogFooter>
          
        <DialogButton
          text="CANCEL"
          onPress={() => {}}
        />
        <DialogButton
          text="OK"
          onPress={() => {}}
        />
      </DialogFooter>
    }
  >
    <DialogContent>
    
    </DialogContent>
  </Dialog>
</View>

);
}
}
