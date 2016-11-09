/**
 *添加子类
 */
function addAssetType(id,id2){
    $('#SubclassName').val('');
    $('#addAssetTypeTitle').html($('#'+id2).html());
    show(id);
}