exports.getColumnCreation = (req, res) => {
    const columnType = ['date', 'number', 'multiselect'];
    if(req.session.columnDatas == undefined)
        req.session.columnDatas = [];
    res.render('column-creation', {
        title: 'Column Creation',
        column_types: columnType
    })
}

exports.postColumnCreation = (req, res) => {
    console.log('req body', req.body)
    let col_name = req.body.column_name
    let col_type = req.body.column_type_select

    let columnData = {
        'col_name': col_name,
        'col_type': col_type,
        'multiselect_value': req.body.column_type_value.split(','),
        'value': []
    }
    req.session.columnDatas.push(columnData);

    res.redirect(`gettableentry`)
}

exports.getTableEntry = (req, res) => {

    console.log('table entry', req.session.columnDatas)

    res.render('table-entry', {
        title: 'Table Entry',
        column_datas: req.session.columnDatas
    })
}

exports.postTableEntry = (req, res) => {
    console.log('req body', req.body);

    res.redirect(`gettableentry`)
}

exports.getTableView = (req, res) => {

    console.log('session data', req.session.columnDatas)
    res.render('table-view', {
        title: 'Table View',
        table_view_datas: req.session.columnDatas
    })
}

exports.postTableView = (req, res) => {
    console.log('table view body', req.body)

    let data = JSON.parse(req.body.table_data);
    
    for(x in req.session.columnDatas) {
        req.session.columnDatas[x].value = []
    }

    for(let i = 1; i < data.length; i++) {
        console.log(data[i].row_data)
        let table_row_data = data[i].row_data
        // for(column of data[i].row_data) {
        //     console.log(column);
            for(x in req.session.columnDatas) {
                req.session.columnDatas[x].value.push(table_row_data[x]);
            }
        // }
    }

    res.redirect(`gettableview`)
}