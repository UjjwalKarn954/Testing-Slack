"use strict";
// https://www.terraform.io/docs/providers/aws/r/ssm_document.html
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
exports.SsmDocument = exports.SsmDocumentParameter = void 0;
var cdktf = require("cdktf");
var SsmDocumentParameter = /** @class */ (function (_super) {
    __extends(SsmDocumentParameter, _super);
    function SsmDocumentParameter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(SsmDocumentParameter.prototype, "defaultValue", {
        // default_value - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('default_value');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsmDocumentParameter.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsmDocumentParameter.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsmDocumentParameter.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    return SsmDocumentParameter;
}(cdktf.ComplexComputedList));
exports.SsmDocumentParameter = SsmDocumentParameter;
function ssmDocumentAttachmentsSourceToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        key: cdktf.stringToTerraform(struct.key),
        name: cdktf.stringToTerraform(struct.name),
        values: cdktf.listMapper(cdktf.stringToTerraform)(struct.values)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ssm_document.html aws_ssm_document}
*/
var SsmDocument = /** @class */ (function (_super) {
    __extends(SsmDocument, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ssm_document.html aws_ssm_document} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SsmDocumentConfig
    */
    function SsmDocument(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_ssm_document',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._content = config.content;
        _this._documentFormat = config.documentFormat;
        _this._documentType = config.documentType;
        _this._name = config.name;
        _this._permissions = config.permissions;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._targetType = config.targetType;
        _this._versionName = config.versionName;
        _this._attachmentsSource = config.attachmentsSource;
        return _this;
    }
    Object.defineProperty(SsmDocument.prototype, "arn", {
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
    Object.defineProperty(SsmDocument.prototype, "content", {
        get: function () {
            return this.getStringAttribute('content');
        },
        set: function (value) {
            this._content = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsmDocument.prototype, "contentInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._content;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsmDocument.prototype, "createdDate", {
        // created_date - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_date');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsmDocument.prototype, "defaultVersion", {
        // default_version - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('default_version');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsmDocument.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsmDocument.prototype, "documentFormat", {
        get: function () {
            return this.getStringAttribute('document_format');
        },
        set: function (value) {
            this._documentFormat = value;
        },
        enumerable: false,
        configurable: true
    });
    SsmDocument.prototype.resetDocumentFormat = function () {
        this._documentFormat = undefined;
    };
    Object.defineProperty(SsmDocument.prototype, "documentFormatInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._documentFormat;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsmDocument.prototype, "documentType", {
        get: function () {
            return this.getStringAttribute('document_type');
        },
        set: function (value) {
            this._documentType = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsmDocument.prototype, "documentTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._documentType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsmDocument.prototype, "documentVersion", {
        // document_version - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('document_version');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsmDocument.prototype, "hash", {
        // hash - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('hash');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsmDocument.prototype, "hashType", {
        // hash_type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('hash_type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsmDocument.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsmDocument.prototype, "latestVersion", {
        // latest_version - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('latest_version');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsmDocument.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsmDocument.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsmDocument.prototype, "owner", {
        // owner - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('owner');
        },
        enumerable: false,
        configurable: true
    });
    // parameter - computed: true, optional: false, required: false
    SsmDocument.prototype.parameter = function (index) {
        return new SsmDocumentParameter(this, 'parameter', index);
    };
    Object.defineProperty(SsmDocument.prototype, "permissions", {
        get: function () {
            return this.interpolationForAttribute('permissions');
        },
        set: function (value) {
            this._permissions = value;
        },
        enumerable: false,
        configurable: true
    });
    SsmDocument.prototype.resetPermissions = function () {
        this._permissions = undefined;
    };
    Object.defineProperty(SsmDocument.prototype, "permissionsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._permissions;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsmDocument.prototype, "platformTypes", {
        // platform_types - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('platform_types');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsmDocument.prototype, "schemaVersion", {
        // schema_version - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('schema_version');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsmDocument.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsmDocument.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    SsmDocument.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(SsmDocument.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsmDocument.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    SsmDocument.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(SsmDocument.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsmDocument.prototype, "targetType", {
        get: function () {
            return this.getStringAttribute('target_type');
        },
        set: function (value) {
            this._targetType = value;
        },
        enumerable: false,
        configurable: true
    });
    SsmDocument.prototype.resetTargetType = function () {
        this._targetType = undefined;
    };
    Object.defineProperty(SsmDocument.prototype, "targetTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._targetType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsmDocument.prototype, "versionName", {
        get: function () {
            return this.getStringAttribute('version_name');
        },
        set: function (value) {
            this._versionName = value;
        },
        enumerable: false,
        configurable: true
    });
    SsmDocument.prototype.resetVersionName = function () {
        this._versionName = undefined;
    };
    Object.defineProperty(SsmDocument.prototype, "versionNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._versionName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsmDocument.prototype, "attachmentsSource", {
        get: function () {
            return this.interpolationForAttribute('attachments_source');
        },
        set: function (value) {
            this._attachmentsSource = value;
        },
        enumerable: false,
        configurable: true
    });
    SsmDocument.prototype.resetAttachmentsSource = function () {
        this._attachmentsSource = undefined;
    };
    Object.defineProperty(SsmDocument.prototype, "attachmentsSourceInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._attachmentsSource;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    SsmDocument.prototype.synthesizeAttributes = function () {
        return {
            content: cdktf.stringToTerraform(this._content),
            document_format: cdktf.stringToTerraform(this._documentFormat),
            document_type: cdktf.stringToTerraform(this._documentType),
            name: cdktf.stringToTerraform(this._name),
            permissions: cdktf.hashMapper(cdktf.anyToTerraform)(this._permissions),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            target_type: cdktf.stringToTerraform(this._targetType),
            version_name: cdktf.stringToTerraform(this._versionName),
            attachments_source: cdktf.listMapper(ssmDocumentAttachmentsSourceToTerraform)(this._attachmentsSource)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    SsmDocument.tfResourceType = "aws_ssm_document";
    return SsmDocument;
}(cdktf.TerraformResource));
exports.SsmDocument = SsmDocument;
