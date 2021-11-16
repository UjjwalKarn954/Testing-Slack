"use strict";
// https://www.terraform.io/docs/providers/aws/d/qldb_ledger.html
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
exports.DataAwsQldbLedger = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/qldb_ledger.html aws_qldb_ledger}
*/
var DataAwsQldbLedger = /** @class */ (function (_super) {
    __extends(DataAwsQldbLedger, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/qldb_ledger.html aws_qldb_ledger} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsQldbLedgerConfig
    */
    function DataAwsQldbLedger(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_qldb_ledger',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._name = config.name;
        return _this;
    }
    Object.defineProperty(DataAwsQldbLedger.prototype, "arn", {
        // ==========
        // ATTRIBUTES
        // ==========
        // arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsQldbLedger.prototype, "deletionProtection", {
        // deletion_protection - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('deletion_protection');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsQldbLedger.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsQldbLedger.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsQldbLedger.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsQldbLedger.prototype, "permissionsMode", {
        // permissions_mode - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('permissions_mode');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataAwsQldbLedger.prototype.synthesizeAttributes = function () {
        return {
            name: cdktf.stringToTerraform(this._name)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsQldbLedger.tfResourceType = "aws_qldb_ledger";
    return DataAwsQldbLedger;
}(cdktf.TerraformDataSource));
exports.DataAwsQldbLedger = DataAwsQldbLedger;
