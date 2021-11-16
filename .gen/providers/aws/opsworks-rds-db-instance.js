"use strict";
// https://www.terraform.io/docs/providers/aws/r/opsworks_rds_db_instance.html
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
exports.OpsworksRdsDbInstance = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rds_db_instance.html aws_opsworks_rds_db_instance}
*/
var OpsworksRdsDbInstance = /** @class */ (function (_super) {
    __extends(OpsworksRdsDbInstance, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rds_db_instance.html aws_opsworks_rds_db_instance} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options OpsworksRdsDbInstanceConfig
    */
    function OpsworksRdsDbInstance(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_opsworks_rds_db_instance',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._dbPassword = config.dbPassword;
        _this._dbUser = config.dbUser;
        _this._rdsDbInstanceArn = config.rdsDbInstanceArn;
        _this._stackId = config.stackId;
        return _this;
    }
    Object.defineProperty(OpsworksRdsDbInstance.prototype, "dbPassword", {
        get: function () {
            return this.getStringAttribute('db_password');
        },
        set: function (value) {
            this._dbPassword = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksRdsDbInstance.prototype, "dbPasswordInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._dbPassword;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksRdsDbInstance.prototype, "dbUser", {
        get: function () {
            return this.getStringAttribute('db_user');
        },
        set: function (value) {
            this._dbUser = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksRdsDbInstance.prototype, "dbUserInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._dbUser;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksRdsDbInstance.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksRdsDbInstance.prototype, "rdsDbInstanceArn", {
        get: function () {
            return this.getStringAttribute('rds_db_instance_arn');
        },
        set: function (value) {
            this._rdsDbInstanceArn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksRdsDbInstance.prototype, "rdsDbInstanceArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._rdsDbInstanceArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksRdsDbInstance.prototype, "stackId", {
        get: function () {
            return this.getStringAttribute('stack_id');
        },
        set: function (value) {
            this._stackId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksRdsDbInstance.prototype, "stackIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._stackId;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    OpsworksRdsDbInstance.prototype.synthesizeAttributes = function () {
        return {
            db_password: cdktf.stringToTerraform(this._dbPassword),
            db_user: cdktf.stringToTerraform(this._dbUser),
            rds_db_instance_arn: cdktf.stringToTerraform(this._rdsDbInstanceArn),
            stack_id: cdktf.stringToTerraform(this._stackId)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    OpsworksRdsDbInstance.tfResourceType = "aws_opsworks_rds_db_instance";
    return OpsworksRdsDbInstance;
}(cdktf.TerraformResource));
exports.OpsworksRdsDbInstance = OpsworksRdsDbInstance;
