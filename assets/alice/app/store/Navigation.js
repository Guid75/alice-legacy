Ext.define('Alice.store.Navigation', {
    extend: 'Ext.data.TreeStore',

    root: {
        text: 'Classes',
        expanded: true,
        children: [
            {
                text: 'Terminal Agri',
				leaf: true
            },
            {
                text: '1er Agri',
				leaf: true
            },
            {
                text: 'Terminal Horti',
				leaf: true
            },
            {
                text: '1er Horti',
				leaf: true
            }
        ]
    }
});
