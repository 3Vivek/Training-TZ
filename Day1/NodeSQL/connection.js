const sql=require("mssql/msnodesqlv8");
var config={
    server:"DESKTOP-6NEIRAF\\SQLEXPRESS",
    database:"Vivek",
    driver:"msnodesqlv8",
    options:{
        trustedConnection:true
    }
}


sql.connect(config,function(err){
    if(err)console.log(err);
    var request=new sql.Request();
    request.query("select * from employee",function(err,records){
        if(err)console.log(err);
        else console.log(records);
    })
})