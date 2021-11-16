"use strict";
// https://www.terraform.io/docs/providers/aws/d/efs_access_points.html
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
exports.DataAwsEfsAccessPoints = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/efs_access_points.html aws_efs_access_points}
*/
var DataAwsEfsAccessPoints = /** @class */ (function (_super) {
    __extends(DataAwsEfsAccessPoints, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/efs_access_points.html aws_efs_access_points} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEfsAccessPointsConfig
    */
    function DataAwsEfsAccessPoints(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_efs_access_points',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._fileSystemId = config.fileSystemId;
        return _this;
    }
    Object.defineProperty(DataAwsEfsAccessPoints.prototype, "arns", {
        // ==========
        // ATTRIBUTES
        // ==========
        // arns - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('arns');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEfsAccessPoints.prototype, "fileSystemId", {
        get: function () {
            return this.getStringAttribute('file_system_id');
        },
        set: function (value) {
            this._fileSystemId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEfsAccessPoints.prototype, "fileSystemIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._fileSystemId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEfsAccessPoints.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEfsAccessPoints.prototype, "ids", {
        // ids - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('ids');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataAwsEfsAccessPoints.prototype.synthesizeAttributes = function () {
        return {
            file_system_id: cdktf.stringToTerraform(this._fileSystemId)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsEfsAccessPoints.tfResourceType = "aws_efs_access_points";
    return DataAwsEfsAccessPoints;
}(cdktf.TerraformDataSource));
exports.DataAwsEfsAccessPoints = DataAwsEfsAccessPoints;
