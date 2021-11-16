"use strict";
// https://www.terraform.io/docs/providers/aws/r/storagegateway_tape_pool.html
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
exports.StoragegatewayTapePool = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_tape_pool.html aws_storagegateway_tape_pool}
*/
var StoragegatewayTapePool = /** @class */ (function (_super) {
    __extends(StoragegatewayTapePool, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_tape_pool.html aws_storagegateway_tape_pool} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options StoragegatewayTapePoolConfig
    */
    function StoragegatewayTapePool(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_storagegateway_tape_pool',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._poolName = config.poolName;
        _this._retentionLockTimeInDays = config.retentionLockTimeInDays;
        _this._retentionLockType = config.retentionLockType;
        _this._storageClass = config.storageClass;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        return _this;
    }
    Object.defineProperty(StoragegatewayTapePool.prototype, "arn", {
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
    Object.defineProperty(StoragegatewayTapePool.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StoragegatewayTapePool.prototype, "poolName", {
        get: function () {
            return this.getStringAttribute('pool_name');
        },
        set: function (value) {
            this._poolName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StoragegatewayTapePool.prototype, "poolNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._poolName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StoragegatewayTapePool.prototype, "retentionLockTimeInDays", {
        get: function () {
            return this.getNumberAttribute('retention_lock_time_in_days');
        },
        set: function (value) {
            this._retentionLockTimeInDays = value;
        },
        enumerable: false,
        configurable: true
    });
    StoragegatewayTapePool.prototype.resetRetentionLockTimeInDays = function () {
        this._retentionLockTimeInDays = undefined;
    };
    Object.defineProperty(StoragegatewayTapePool.prototype, "retentionLockTimeInDaysInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._retentionLockTimeInDays;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StoragegatewayTapePool.prototype, "retentionLockType", {
        get: function () {
            return this.getStringAttribute('retention_lock_type');
        },
        set: function (value) {
            this._retentionLockType = value;
        },
        enumerable: false,
        configurable: true
    });
    StoragegatewayTapePool.prototype.resetRetentionLockType = function () {
        this._retentionLockType = undefined;
    };
    Object.defineProperty(StoragegatewayTapePool.prototype, "retentionLockTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._retentionLockType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StoragegatewayTapePool.prototype, "storageClass", {
        get: function () {
            return this.getStringAttribute('storage_class');
        },
        set: function (value) {
            this._storageClass = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StoragegatewayTapePool.prototype, "storageClassInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._storageClass;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StoragegatewayTapePool.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    StoragegatewayTapePool.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(StoragegatewayTapePool.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StoragegatewayTapePool.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    StoragegatewayTapePool.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(StoragegatewayTapePool.prototype, "tagsAllInput", {
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
    StoragegatewayTapePool.prototype.synthesizeAttributes = function () {
        return {
            pool_name: cdktf.stringToTerraform(this._poolName),
            retention_lock_time_in_days: cdktf.numberToTerraform(this._retentionLockTimeInDays),
            retention_lock_type: cdktf.stringToTerraform(this._retentionLockType),
            storage_class: cdktf.stringToTerraform(this._storageClass),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    StoragegatewayTapePool.tfResourceType = "aws_storagegateway_tape_pool";
    return StoragegatewayTapePool;
}(cdktf.TerraformResource));
exports.StoragegatewayTapePool = StoragegatewayTapePool;
