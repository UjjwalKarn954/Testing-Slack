"use strict";
// https://www.terraform.io/docs/providers/aws/r/codebuild_report_group.html
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
exports.CodebuildReportGroup = void 0;
var cdktf = require("cdktf");
function codebuildReportGroupExportConfigS3DestinationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        bucket: cdktf.stringToTerraform(struct.bucket),
        encryption_disabled: cdktf.booleanToTerraform(struct.encryptionDisabled),
        encryption_key: cdktf.stringToTerraform(struct.encryptionKey),
        packaging: cdktf.stringToTerraform(struct.packaging),
        path: cdktf.stringToTerraform(struct.path)
    };
}
function codebuildReportGroupExportConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        type: cdktf.stringToTerraform(struct.type),
        s3_destination: cdktf.listMapper(codebuildReportGroupExportConfigS3DestinationToTerraform)(struct.s3Destination)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group.html aws_codebuild_report_group}
*/
var CodebuildReportGroup = /** @class */ (function (_super) {
    __extends(CodebuildReportGroup, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group.html aws_codebuild_report_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CodebuildReportGroupConfig
    */
    function CodebuildReportGroup(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_codebuild_report_group',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._deleteReports = config.deleteReports;
        _this._name = config.name;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._type = config.type;
        _this._exportConfig = config.exportConfig;
        return _this;
    }
    Object.defineProperty(CodebuildReportGroup.prototype, "arn", {
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
    Object.defineProperty(CodebuildReportGroup.prototype, "created", {
        // created - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodebuildReportGroup.prototype, "deleteReports", {
        get: function () {
            return this.getBooleanAttribute('delete_reports');
        },
        set: function (value) {
            this._deleteReports = value;
        },
        enumerable: false,
        configurable: true
    });
    CodebuildReportGroup.prototype.resetDeleteReports = function () {
        this._deleteReports = undefined;
    };
    Object.defineProperty(CodebuildReportGroup.prototype, "deleteReportsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._deleteReports;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodebuildReportGroup.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodebuildReportGroup.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodebuildReportGroup.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodebuildReportGroup.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    CodebuildReportGroup.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(CodebuildReportGroup.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodebuildReportGroup.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    CodebuildReportGroup.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(CodebuildReportGroup.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodebuildReportGroup.prototype, "type", {
        get: function () {
            return this.getStringAttribute('type');
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodebuildReportGroup.prototype, "typeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._type;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodebuildReportGroup.prototype, "exportConfig", {
        get: function () {
            return this.interpolationForAttribute('export_config');
        },
        set: function (value) {
            this._exportConfig = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodebuildReportGroup.prototype, "exportConfigInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._exportConfig;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    CodebuildReportGroup.prototype.synthesizeAttributes = function () {
        return {
            delete_reports: cdktf.booleanToTerraform(this._deleteReports),
            name: cdktf.stringToTerraform(this._name),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            type: cdktf.stringToTerraform(this._type),
            export_config: cdktf.listMapper(codebuildReportGroupExportConfigToTerraform)(this._exportConfig)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    CodebuildReportGroup.tfResourceType = "aws_codebuild_report_group";
    return CodebuildReportGroup;
}(cdktf.TerraformResource));
exports.CodebuildReportGroup = CodebuildReportGroup;
