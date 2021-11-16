"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var cdktf_1 = require("cdktf");
var MyStack = /** @class */ (function (_super) {
    __extends(MyStack, _super);
    function MyStack(scope, name) {
        var _this = _super.call(this, scope, name) || this;
        var stack = new MyStack(app, 'TestingSlack');
        return _this;
        // const slackToken = new TerraformVariable(stack, 'SLACK_TOKEN', {
        //   type: 'string'
        // });
        // new SlackProvider(stack, "slack", {
        //   token: slackToken.stringValue
        // });
    }
    return MyStack;
}(cdktf_1.TerraformStack));
var app = new cdktf_1.App();
app.synth();
