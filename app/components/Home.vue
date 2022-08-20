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
                    <Span text="Recuperar Contraseña"
         />
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

</script>

<style scoped>
.btn {
    font-size: 20;
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
