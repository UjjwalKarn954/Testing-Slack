"use strict";
// https://www.terraform.io/docs/providers/aws/r/qldb_ledger.html
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
exports.QldbLedger = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/qldb_ledger.html aws_qldb_ledger}
*/
var QldbLedger = /** @class */ (function (_super) {
    __extends(QldbLedger, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/qldb_ledger.html aws_qldb_ledger} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options QldbLedgerConfig
    */
    function QldbLedger(scope, id, config) {
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
        _this._deletionProtection = config.deletionProtection;
        _this._name = config.name;
        _this._permissionsMode = config.permissionsMode;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        return _this;
    }
    Object.defineProperty(QldbLedger.prototype, "arn", {
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
    Object.defineProperty(QldbLedger.prototype, "deletionProtection", {
        get: function () {
            return this.getBooleanAttribute('deletion_protection');
        },
        set: function (value) {
            this._deletionProtection = value;
        },
        enumerable: false,
        configurable: true
    });
    QldbLedger.prototype.resetDeletionProtection = function () {
        this._deletionProtection = undefined;
    };
    Object.defineProperty(QldbLedger.prototype, "deletionProtectionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._deletionProtection;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(QldbLedger.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(QldbLedger.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    QldbLedger.prototype.resetName = function () {
        this._name = undefined;
    };
    Object.defineProperty(QldbLedger.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(QldbLedger.prototype, "permissionsMode", {
        get: function () {
            return this.getStringAttribute('permissions_mode');
        },
        set: function (value) {
            this._permissionsMode = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(QldbLedger.prototype, "permissionsModeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._permissionsMode;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(QldbLedger.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    QldbLedger.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(QldbLedger.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(QldbLedger.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    QldbLedger.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(QldbLedger.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    QldbLedger.prototype.synthesizeAttributes = function () {
        return {
            deletion_protection: cdktf.booleanToTerraform(this._deletionProtection),
            name: cdktf.stringToTerraform(this._name),
            permissions_mode: cdktf.stringToTerraform(this._permissionsMode),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    QldbLedger.tfResourceType = "aws_qldb_ledger";
    return QldbLedger;
}(cdktf.TerraformResource));
exports.QldbLedger = QldbLedger;
