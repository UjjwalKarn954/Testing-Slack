"use strict";
// https://www.terraform.io/docs/providers/aws/r/directory_service_log_subscription.html
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
exports.DirectoryServiceLogSubscription = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/directory_service_log_subscription.html aws_directory_service_log_subscription}
*/
var DirectoryServiceLogSubscription = /** @class */ (function (_super) {
    __extends(DirectoryServiceLogSubscription, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/directory_service_log_subscription.html aws_directory_service_log_subscription} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DirectoryServiceLogSubscriptionConfig
    */
    function DirectoryServiceLogSubscription(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_directory_service_log_subscription',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._directoryId = config.directoryId;
        _this._logGroupName = config.logGroupName;
        return _this;
    }
    Object.defineProperty(DirectoryServiceLogSubscription.prototype, "directoryId", {
        get: function () {
            return this.getStringAttribute('directory_id');
        },
        set: function (value) {
            this._directoryId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DirectoryServiceLogSubscription.prototype, "directoryIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._directoryId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DirectoryServiceLogSubscription.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DirectoryServiceLogSubscription.prototype, "logGroupName", {
        get: function () {
            return this.getStringAttribute('log_group_name');
        },
        set: function (value) {
            this._logGroupName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DirectoryServiceLogSubscription.prototype, "logGroupNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._logGroupName;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DirectoryServiceLogSubscription.prototype.synthesizeAttributes = function () {
        return {
            directory_id: cdktf.stringToTerraform(this._directoryId),
            log_group_name: cdktf.stringToTerraform(this._logGroupName)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DirectoryServiceLogSubscription.tfResourceType = "aws_directory_service_log_subscription";
    return DirectoryServiceLogSubscription;
}(cdktf.TerraformResource));
exports.DirectoryServiceLogSubscription = DirectoryServiceLogSubscription;
