"use strict";
// https://www.terraform.io/docs/providers/aws/d/key_pair.html
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
exports.DataAwsKeyPair = void 0;
var cdktf = require("cdktf");
function dataAwsKeyPairFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        values: cdktf.listMapper(cdktf.stringToTerraform)(struct.values)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/key_pair.html aws_key_pair}
*/
var DataAwsKeyPair = /** @class */ (function (_super) {
    __extends(DataAwsKeyPair, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/key_pair.html aws_key_pair} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsKeyPairConfig = {}
    */
    function DataAwsKeyPair(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_key_pair',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._keyName = config.keyName;
        _this._keyPairId = config.keyPairId;
        _this._tags = config.tags;
        _this._filter = config.filter;
        return _this;
    }
    Object.defineProperty(DataAwsKeyPair.prototype, "arn", {
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
    Object.defineProperty(DataAwsKeyPair.prototype, "fingerprint", {
        // fingerprint - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('fingerprint');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsKeyPair.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsKeyPair.prototype, "keyName", {
        get: function () {
            return this.getStringAttribute('key_name');
        },
        set: function (value) {
            this._keyName = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsKeyPair.prototype.resetKeyName = function () {
        this._keyName = undefined;
    };
    Object.defineProperty(DataAwsKeyPair.prototype, "keyNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._keyName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsKeyPair.prototype, "keyPairId", {
        get: function () {
            return this.getStringAttribute('key_pair_id');
        },
        set: function (value) {
            this._keyPairId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsKeyPair.prototype.resetKeyPairId = function () {
        this._keyPairId = undefined;
    };
    Object.defineProperty(DataAwsKeyPair.prototype, "keyPairIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._keyPairId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsKeyPair.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsKeyPair.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(DataAwsKeyPair.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsKeyPair.prototype, "filter", {
        get: function () {
            return this.interpolationForAttribute('filter');
        },
        set: function (value) {
            this._filter = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsKeyPair.prototype.resetFilter = function () {
        this._filter = undefined;
    };
    Object.defineProperty(DataAwsKeyPair.prototype, "filterInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._filter;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataAwsKeyPair.prototype.synthesizeAttributes = function () {
        return {
            key_name: cdktf.stringToTerraform(this._keyName),
            key_pair_id: cdktf.stringToTerraform(this._keyPairId),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            filter: cdktf.listMapper(dataAwsKeyPairFilterToTerraform)(this._filter)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsKeyPair.tfResourceType = "aws_key_pair";
    return DataAwsKeyPair;
}(cdktf.TerraformDataSource));
exports.DataAwsKeyPair = DataAwsKeyPair;
