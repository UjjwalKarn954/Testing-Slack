"use strict";
// https://www.terraform.io/docs/providers/aws/d/outposts_outpost_instance_type.html
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
exports.DataAwsOutpostsOutpostInstanceType = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/outposts_outpost_instance_type.html aws_outposts_outpost_instance_type}
*/
var DataAwsOutpostsOutpostInstanceType = /** @class */ (function (_super) {
    __extends(DataAwsOutpostsOutpostInstanceType, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/outposts_outpost_instance_type.html aws_outposts_outpost_instance_type} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsOutpostsOutpostInstanceTypeConfig
    */
    function DataAwsOutpostsOutpostInstanceType(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_outposts_outpost_instance_type',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._arn = config.arn;
        _this._instanceType = config.instanceType;
        _this._preferredInstanceTypes = config.preferredInstanceTypes;
        return _this;
    }
    Object.defineProperty(DataAwsOutpostsOutpostInstanceType.prototype, "arn", {
        get: function () {
            return this.getStringAttribute('arn');
        },
        set: function (value) {
            this._arn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsOutpostsOutpostInstanceType.prototype, "arnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._arn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsOutpostsOutpostInstanceType.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsOutpostsOutpostInstanceType.prototype, "instanceType", {
        get: function () {
            return this.getStringAttribute('instance_type');
        },
        set: function (value) {
            this._instanceType = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsOutpostsOutpostInstanceType.prototype.resetInstanceType = function () {
        this._instanceType = undefined;
    };
    Object.defineProperty(DataAwsOutpostsOutpostInstanceType.prototype, "instanceTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._instanceType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsOutpostsOutpostInstanceType.prototype, "preferredInstanceTypes", {
        get: function () {
            return this.getListAttribute('preferred_instance_types');
        },
        set: function (value) {
            this._preferredInstanceTypes = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsOutpostsOutpostInstanceType.prototype.resetPreferredInstanceTypes = function () {
        this._preferredInstanceTypes = undefined;
    };
    Object.defineProperty(DataAwsOutpostsOutpostInstanceType.prototype, "preferredInstanceTypesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._preferredInstanceTypes;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataAwsOutpostsOutpostInstanceType.prototype.synthesizeAttributes = function () {
        return {
            arn: cdktf.stringToTerraform(this._arn),
            instance_type: cdktf.stringToTerraform(this._instanceType),
            preferred_instance_types: cdktf.listMapper(cdktf.stringToTerraform)(this._preferredInstanceTypes)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsOutpostsOutpostInstanceType.tfResourceType = "aws_outposts_outpost_instance_type";
    return DataAwsOutpostsOutpostInstanceType;
}(cdktf.TerraformDataSource));
exports.DataAwsOutpostsOutpostInstanceType = DataAwsOutpostsOutpostInstanceType;
