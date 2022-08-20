<template>
  <Page class="page">
    <ActionBar title="Perico Picadas" class="action-bar" />
<StackLayout class="home-panel">
        <Image src="~/new-folder/Perico2.jpg" width="250" class="m-b-10" />
        <StackLayout class="nt-form">
            <TextField hint="Usuario" class="-border"/>
            <TextField hint="Contraseña" class="-border"/>
            <TextView editable="false">
                <FormattedString>
                    <Span text="Recuperar Contraseña " fontStyle="Italic"
                        class="h6" />
                </FormattedString>
            </TextView>
            <Button class="btn btn-rounded-sm" text="Registrarse"
                backgroundColor="#008800" width="160" tap="onTap" >
                </Button>
        </StackLayout>
    </StackLayout>
</Page>
  </Page>
</template>

<script>
export default {
  methods: {
    onItemTap: function (args) {
      action('What do you want to do with this task?', 'Cancel', [
        'Mark completed',
        'Delete forever',
      ]).then((result) => {
        console.log(result); // Logs the selected option for debugging.
        switch (result) {
          case 'Mark completed':
            this.dones.unshift(args.item); // Places the tapped active task at the top of the completed tasks.
            this.todos.splice(args.index, 1); // Removes the tapped active  task.
            break;
          case 'Delete forever':
            this.todos.splice(args.index, 1); // Removes the tapped active task.
            break;
          case 'Cancel' || undefined: // Dismisses the dialog.
            break;
        }
      });
    },

    onButtonTap() {
      if (this.textFieldValue === '') return; // Prevents users from entering an empty string.
      console.log('New task added: ' + this.textFieldValue + '.'); // Logs the newly added task in the console for debugging.
      this.todos.unshift({
        name: this.textFieldValue,
      }); // Adds tasks in the ToDo array. Newly added tasks are immediately shown on the screen.
      this.textFieldValue = ''; // Clears the text field so that users can start adding new tasks immediately.
    },
  },

  data() {
    return {
      dones: [],
      todos: [],
      textFieldValue: '',
    };
  },
};
</script>

<style scoped>
.btn {
    font-size: 18;
}

.home-panel{
    vertical-align: center;
    font-size: 20;
    margin: 15;   
}

.description-label{
    margin-bottom: 15;
     
}

</style>
