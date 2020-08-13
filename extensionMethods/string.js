String.prototype.IsFilled = function () {
    if (this && this.length > 0) {
        return true;
    }
    return false;
}

String.prototype.IsEmpty = function () {
    return !this.IsFilled();
}

String.prototype.Format = function(...args){
    var formattedString = this;
    for (let index = 0; index < args.length; index++) {
        formattedString =  formattedString.replace('{'+index+'}', args[index]);
    }
    return formattedString;
}