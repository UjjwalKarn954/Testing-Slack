"use strict";
// https://www.terraform.io/docs/providers/aws/r/amplify_webhook.html
// generated from terraform resource schema
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
exports.AmplifyWebhook = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/amplify_webhook.html aws_amplify_webhook}
*/
var AmplifyWebhook = /** @class */ (function (_super) {
    __extends(AmplifyWebhook, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/amplify_webhook.html aws_amplify_webhook} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AmplifyWebhookConfig
    */
    function AmplifyWebhook(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_amplify_webhook',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._appId = config.appId;
        _this._branchName = config.branchName;
        _this._description = config.description;
        return _this;
    }
    Object.defineProperty(AmplifyWebhook.prototype, "appId", {
        get: function () {
            return this.getStringAttribute('app_id');
        },
        set: function (value) {
            this._appId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AmplifyWebhook.prototype, "appIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._appId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AmplifyWebhook.prototype, "arn", {
        // arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AmplifyWebhook.prototype, "branchName", {
        get: function () {
            return this.getStringAttribute('branch_name');
        },
        set: function (value) {
            this._branchName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AmplifyWebhook.prototype, "branchNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._branchName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AmplifyWebhook.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    AmplifyWebhook.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(AmplifyWebhook.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AmplifyWebhook.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AmplifyWebhook.prototype, "url", {
        // url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('url');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    AmplifyWebhook.prototype.synthesizeAttributes = function () {
        return {
            app_id: cdktf.stringToTerraform(this._appId),
            branch_name: cdktf.stringToTerraform(this._branchName),
            description: cdktf.stringToTerraform(this._description)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    AmplifyWebhook.tfResourceType = "aws_amplify_webhook";
    return AmplifyWebhook;
}(cdktf.TerraformResource));
exports.AmplifyWebhook = AmplifyWebhook;
