class DatabaseConnection{

    static connection;

    env = 'development';

// static initialization block: this block is executed when the class is loaded  and happens only once 
    static {
        // this keyword refers to the class
        if(this.env === 'development'){
            this.connection = 'localhost:3000';
        }else{
            this.connection = 'localhost:3001';
        }
    }

}